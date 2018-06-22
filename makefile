# 处理 Todo 库的代码同步

FOLDER_NAME = todo-temp
TARGET_NAME = pages

todo-clean:
	rm -rf $(TARGET_NAME)

copy-todo: 
	rm -rf $(TARGET_NAME) $(FOLDER_NAME) && git clone https://github.com/NervJS/taro-components-sample.git $(FOLDER_NAME) && mv -f ./$(FOLDER_NAME)/src/pages/component/pages ./ && rm -rf $(FOLDER_NAME)