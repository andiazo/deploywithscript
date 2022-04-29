echo "Testing ..."
react-scripts test --silent --coverage --watchAll=false
if [ $? -eq 0 ]; then 
    echo $?
    echo "All tests passed"
    echo "Building ..."
    react-scripts build 
    cp -r build "C:\server\myapp\html"
    exit 1
else
    echo $?
    echo "Check your tests"
    exit 1
fi