BIN=node_modules/.bin

test:
	make lint
	$(BIN)/mocha test/specs/**.js

lint:
	$(BIN)/eslint index.js
	$(BIN)/eslint test/specs

.PHONY: test
