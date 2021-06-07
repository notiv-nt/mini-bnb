import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  AfterLoad,
} from 'typeorm';

@Entity()
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  address: string;

  @Column('text')
  about: string;

  @Column({ type: 'bool', default: false })
  amenity_wifi: boolean;

  @Column({ type: 'bool', default: false })
  amenity_pets_allowed: boolean;

  @Column({ type: 'bool', default: false })
  amenity_tv: boolean;

  @Column({ type: 'bool', default: false })
  amenity_kitchen: boolean;

  @Column({ type: 'bool', default: false })
  amenity_breakfast: boolean;

  @Column({ type: 'bool', default: false })
  amenity_laptop: boolean;

  @Column({ nullable: true })
  price_per_night: string;

  @Column({ nullable: true })
  price_extra_people: string;

  @Column({ type: 'int', nullable: true })
  price_weekly_discount: number;

  @Column({ type: 'int', nullable: true })
  price_monthly_discount: number;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  thumbnail: string;

  @AfterLoad()
  afterLoad() {
    this.thumbnail = `${process.env.STORAGE_URL}/images/${this.id}/Image_1_thumb.jpg`;
  }

  getImages(): string[] {
    return [...Array(4).keys()].map((i) => `${process.env.STORAGE_URL}/images/${this.id}/Image_${i + 1}.jpg`);
  }
}
