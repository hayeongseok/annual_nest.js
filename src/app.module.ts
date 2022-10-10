import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySqlConfigModule } from './database/config.module';
import { MySqlConfigService } from './database/config.service';
import { AnnualInformationModule } from './annual-information/annual-information.module';
import { AnnualApplicationModule } from './annual-application/annual-application.module';
import { QnaController } from './qna/qna.controller';
import { QnaService } from './qna/qna.service';
import { QnaModule } from './qna/qna.module';

/*
  - npm install 진행
  1. npm install --save typeorm@0.2.45 @nestjs/typeorm@8.0.2 mysql2 --legacy-peer-deps
  2. npm install --save @nestjs/config ts-node cross-env --legacy-peer-deps
  
  - DB 연결
  1. database 폴더 생성 및 config.service.ts, config.module.ts 파일 생성
  2. config.service.ts, config.module.ts 파일 내용 작성 및 package.json 환경 변수 내용 변경
  "start:dev": "cross-env NODE_ENV=dev nest start --watch"
  3. AppModule에서 UserModule 추가
  출처 : https://gaemi606.tistory.com/entry/NestJS-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%97%B0%EA%B2%B0-%EC%84%A4%EC%A0%95-%EC%A0%95%EB%B3%B4%EB%A5%BC-%EC%9E%85%EB%A0%A5%ED%95%98%EB%8A%94-%EB%8B%A4%EC%96%91%ED%95%9C-%EB%B0%A9%EB%B2%95-database-connection
  4. ormconfig.json, .development.env 파일 생성
  5. 마이그레이선 설정 추가 (package.json 환경 설정 추가 및 ormconfig.json 파일 내용 추가)
  "scripts": {
    ...
    "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"
  }
  출처 : https://wikidocs.net/158618
  
  - module, service, controller 파일 생성
  1. nest g mo ... // module 생성
  2. nest g s ... // service 생성
  3. nest g co ... // controller 생성
  4. repository, entity 폴더 생성
*/


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: (process.env.NODE_ENV === 'production') ? ".production.env" : ".development.env"
    }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService]
    }),
    MemberModule,
    AnnualInformationModule,
    AnnualApplicationModule,
    QnaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
