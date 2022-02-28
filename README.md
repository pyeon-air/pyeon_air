# pyeon_air
## 1. 프로젝트 소개

<br>

---

<br>

## 2. 설치 Installion
[Docker 공식 홈페이지](https://www.docker.com/get-started)에서 OS에 맞는 Docker를 설치합니다.    
  
[참고자료: mac 도커 설치](https://freestrokes.tistory.com/150)  
[참고자료: window 도커 설치](https://www.lainyzine.com/ko/article/a-complete-guide-to-how-to-install-docker-desktop-on-windows-10/)  
[참고자료: ubuntu 도커 설치](https://dongle94.github.io/docker/docker-ubuntu-install/)  

### 2-2. 레포지토리 clone & 이동
편항 레포지토리를 `clone` 후 해당 레포지토리로 이동합니다.
```
git clone https://github.com/pyeon-air/pyeon_air.git
cd pyeon_air
```

### 2-3. docker 실행
terminal 혹은 cmd 창에 `docker ps` 명령어를 입력하여 docker가 실행중인지 확인합니다. 
```
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```
다음과 같은 에러가 발생한다면 docker가 실행중이지 않아서 발생하는 오류이므로 백그라운드에서 docker를 실행시켜주시면 됩니다.   


### 2-4. docker-compose 
`docker-compose.yml`이 위치하고 있는 디렉토리 내에서 다음과 같이 명령어를 실행시켜 줍니다.  
```
docker-compose up
```
다음 명령어는 docker-compose.yml에 정의 되어있는 postgres, django, react (먼저 이미지를 build하고) 컨테이너를 동시에 실행시킵니다.  
다음과 같이 실행되면 정상적으로 실행이 완료된 것입니다.  
<img width="619" alt="cli-docker" src="https://user-images.githubusercontent.com/74139156/155830928-48c91be9-14dd-40f6-a68e-4bff6af329cf.png">
<img width="619" alt="gui-docker" src="https://user-images.githubusercontent.com/74139156/155830944-554699e3-1f08-48fa-bcbf-e791b6d350f4.png">

종료하려면 CLI에서 `ctrl + C`, `cmd+C`를 눌러 종료하거나, Docker Desktop에서 컨테이너 중지 버튼을 눌러 종료합니다.  
이외에도 다양한 [docker-compose 명령어](https://nirsa.tistory.com/81)는 해당 글을 참고하세요

