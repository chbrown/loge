BIN := node_modules/.bin

all: index.js index.d.ts

$(BIN)/tsc:
	npm install

index.js index.d.ts: index.ts node_modules/node.d.ts $(BIN)/tsc
	$(BIN)/tsc -d

node_modules/node.d.ts:
	mkdir -p $(@D)
	curl -s https://raw.githubusercontent.com/borisyankov/DefinitelyTyped/master/node/node.d.ts > $@
