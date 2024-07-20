배포 및 실행 - Landing Server Example


1.  backend
    1)  테스트(개발 모드)
        인텔리제이 스프링부트 애플리케이션 실행

    2)  빌드(서버 배포) 테스트 하기
        - [jenkins] Invoke top-level Maven targets
        # -f tabbox/backend exec:exec clean package

        - 터미널
        # java -Dspring.profiles.active=production -jar /root/.jenkins/workspace/tabbox/tabbox/backend/target/tabbox.jar

2. frontend


<3> deploy

1. ssh 연결(ssh key 인증)


1)  key 생성하기

    # ssh-keygen -t rsa -b 2048 -m PEM -C "giyun36320@gmail.com"

2)  key 생성 확인

    - private key(개인키): ~/.ssh/id_rsa
    - public key(공개키): ~/.ssh/id_rsa.pub

3)  공개키를 서버에 설치하기
    # mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys

4)  private key 보관

    id_rsa 파일의 내용을 mykey.pem 파일로 로컬에 잘 보관할 것
    cat id_rsa

    rm -rf id_rsa
    echo $PATH
    vi environment
    PATH=/root/.local/bin:/root/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/poscodx/git/bin:/usr/local/poscodx/java/bin:/usr/local/poscodx/maven/bin:/usr/local/poscodx/mariadb/bin

5)  sshd 설정 확인(/etc/ssh/sshd_config)

    /PermitRoot 치고 Enter(검색)
	PermitRootLogin yes

	Esc
	/Env 치고 검색
	PermitUserEnvironment yes

	systemctl restart sshd

6)  접속 테스트
      ssh -i /Users/jiyoon/IdeaProjects/poscodx2024/react-practices/08.Integration/01.deploy/mykey.pem root@192.168.64.7
    # ssh -i mykey.pem root@<Server IP>


    
2. 접속 환경
   
    ~/.ssh/environment
    
    === 내용 예시 ====
    PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/poscodx/java/bin:/usr/local/poscodx/git/bin:/usr/local/poscodx/maven/bin:/usr/local/poscodx/mariadb/bin:/root/bin        

    	
    *PATH 환경 변수 설정, 특히 java 실행 패쓰 신경 쓸 것


3. Publish Over SSH 플러그인(Jenkins) 설치
젠킨스 관리 -> 플러그인 -> Available plugins

1) Publish Over SSH 플러그인 설치

2) Dashboard > Jenkins 관리 > System

   - 실행 서버(SSH server) 등록: 'springboot-publish-server'

    SSH Servers 추가
    name: springboot-publish-server
    hostname: 192.168.64.7
    username: root
    remote directory: /usr/local/poscodx
    저장

    고급 -> use password authentication, or use a different key
    Key에 mykey.pem 안의 텍스트 복사 붙여넣기
    Apply
    Test Configuration -> Success 확인

   - 프로젝트의 빌드 후 조치(post-build action)의 send build artifacts over ssh 설정

     1. tabbox.jar: transfer
     2. launch.sh: transfer + execution

    tabbox 대시보드 -> 구성
    빌드 후 조치 추가 -> Send build artifacts over SSH

    * jenkins 현재 위치는 /root/.jenkins/workspace/tabbox

    Transfer Set 입력
    Source files: tabbox/backend/target/tabbox.jar
    Remove prefix: tabbox/backend/target
    Remote directory: springboot-apps/tabbox

    Add Transfer Set 하나 더 추가해서
    Source files: tabbox/backend/target/launch.sh
    위 2개 똑같이 한번 더 입력하고
    Exec command: chmod 700 /usr/local/poscodx/springboot-apps/tabbox/launch.sh && /usr/local/poscodx/springboot-apps/tabbox/launch.sh

    저장 후 빌드

    (mac) 터미널 ssh로 접속 후, ps -ef | grep tabbox로 확인

    ec2할 때는 ip 주소 부여받은 걸로 입력하고
    sudo 사용하고
    .pem 받은 걸로
    배포하기