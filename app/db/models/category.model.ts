import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from 'typeorm'
import { Products } from './products.model';

@Entity()
class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, })
    name: string;

    @Column("text")
    description: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    @Column({
        default: true,
    })
    is_active: boolean;

    @OneToMany(() => Products, (products) => products.category)
    products: Products[]

}

export { Category }