java -Dwebdriver.gecko.driver=geckodriver.exe -jar selenium-server-standalone-3.9.1.jar -role node -timeout 30 -browserTimeout 60 -hub http://localhost:4444/grid/register -browser browserName=firefox -port 4444