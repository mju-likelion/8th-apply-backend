# MJU LikeLion Official Server

Likelion MJU (nature) official server  
멋쟁이 사자처럼 명지대(자연) 공식 서버

## 📖 Introduction

This project is a server for 2020 8th Like Lion at MyongJi Univ. (nature).  
이 프로젝트는 2020 8기 멋쟁이 사자처럼 명지대 (자연) 운영을 위한 서버 입니다.

## 🏁 Getting Started

### 1. Git clone

```shell
git clone https://github.com/mju-likelion/official-server.git
```

### 2. Make Environment files

#### .env

- PRISMA_ENDPOINT (required): Prisma endpoint url

##### Example .env file

```text
PRISMA_ENDPOINT="{ YOUR_PRISMA_ENDPOINT_URL }"
```

### 3. Start server

```shell
yarn install            # or npm install
yarn global add prisma  # or npm install -g prisma
prisma generate

# after you set your prisma server

prisma deploy
yarn start              # or npm start
```

## 📝 License

This project uses the [MIT Lisence](LICENSE)
