import {MigrationInterface, QueryRunner} from "typeorm";

export class init1607623744700 implements MigrationInterface {
    name = 'init1607623744700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "listing" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "address" character varying NOT NULL, "about" text NOT NULL, "amenity_wifi" boolean NOT NULL DEFAULT false, "amenity_pets_allowed" boolean NOT NULL DEFAULT false, "amenity_tv" boolean NOT NULL DEFAULT false, "amenity_kitchen" boolean NOT NULL DEFAULT false, "amenity_breakfast" boolean NOT NULL DEFAULT false, "amenity_laptop" boolean NOT NULL DEFAULT false, "price_per_night" character varying, "price_extra_people" character varying, "price_weekly_discount" integer, "price_monthly_discount" integer, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_381d45ebb8692362c156d6b87d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_listings_listing" ("userId" integer NOT NULL, "listingId" integer NOT NULL, CONSTRAINT "PK_a0a1d3c83dbb73b6188f91d3cfd" PRIMARY KEY ("userId", "listingId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_466baf73b4032df250a4c72908" ON "user_listings_listing" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_82fab28a025b02365e6957b76d" ON "user_listings_listing" ("listingId") `);
        await queryRunner.query(`ALTER TABLE "user_listings_listing" ADD CONSTRAINT "FK_466baf73b4032df250a4c729085" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_listings_listing" ADD CONSTRAINT "FK_82fab28a025b02365e6957b76d0" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_listings_listing" DROP CONSTRAINT "FK_82fab28a025b02365e6957b76d0"`);
        await queryRunner.query(`ALTER TABLE "user_listings_listing" DROP CONSTRAINT "FK_466baf73b4032df250a4c729085"`);
        await queryRunner.query(`DROP INDEX "IDX_82fab28a025b02365e6957b76d"`);
        await queryRunner.query(`DROP INDEX "IDX_466baf73b4032df250a4c72908"`);
        await queryRunner.query(`DROP TABLE "user_listings_listing"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "listing"`);
    }

}
