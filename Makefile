DTS := node/node
BIN := node_modules/.bin

all: loge.d.ts index.js
type_declarations: $(DTS:%=type_declarations/DefinitelyTyped/%.d.ts)

$(BIN)/tsc:
	npm install

%.js: %.ts type_declarations $(BIN)/tsc
	$(BIN)/tsc --module commonjs --target ES5 $<

type_declarations/DefinitelyTyped/%:
	mkdir -p $(@D)
	curl -s https://raw.githubusercontent.com/chbrown/DefinitelyTyped/master/$* > $@

loge.d.ts: index.ts
	# remove the quadruple-slash meta-comment
	sed 's:^//// ::g' $< > module.ts
	$(BIN)/tsc --module commonjs --target ES5 --declaration module.ts
	# change the module name to a string,
	cat module.d.ts | \
    sed 's:export declare module loge:declare module "loge":' | \
    sed 's:type_declarations:../../type_declarations:' > $@
	# cleanup
	rm module.{ts,d.ts,js}
