# 处理 Todo 库的代码同步

TODO_NAME = pages
TODO_SOURCE_NAME = todo-temp

DOCS_NAME = docs
DOCS_SOURCE_NAME = docs-temp

todo-clean:
	rm -rf $(TODO_NAME)

copy-todo: 
	rm -rf $(TODO_NAME) $(TODO_SOURCE_NAME) && git clone https://github.com/NervJS/taro-components-sample.git $(TODO_SOURCE_NAME) && mv -f ./$(TODO_SOURCE_NAME)/src/pages/component/pages ./ && rm -rf $(TODO_SOURCE_NAME)

copy-docs: 
	rm -rf $(DOCS_NAME) $(DOCS_SOURCE_NAME) && git clone https://github.com/NervJS/taro.git $(DOCS_SOURCE_NAME) && mv -f ./$(DOCS_SOURCE_NAME)/docs/components/ ./$(DOCS_NAME) && rm -rf $(TODO_SOURCE_NAME)