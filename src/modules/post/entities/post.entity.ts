import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  body: string
}
