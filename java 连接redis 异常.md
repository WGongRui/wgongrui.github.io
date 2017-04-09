# Java 连接 Redis 常见问题
# 1.java没有使用账号密码，而redis没有相关设置。出现超时现象
  解决方法一，关闭保护模式
  protected-mode no
  解决方法二，连接时设置密码
  requirepass foobared
# 2.出现以下异常
  redis.clients.jedis.exceptions.JedisDataException: ERR This instance has cluster support disabled
  解决方法
  cluster-enabled yes
# 3.因为防火墙问题，连接超时
  可以关闭防火墙
  如Linux CentOS 执行下面命令 
  systemctl stop firewalld.service
# 4.只有本机可以登陆redis,其他机器连接不上
  可以注释掉 # bind 127.0.0.1
  或者 bind 0.0.0.0 
