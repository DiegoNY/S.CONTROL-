import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'

@Entity()
class Products extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, })
    name: string;
    @Column()
    purchase_price: number

    @Column("text")
    description: string

    @Column()
    sale_price: number

    @Column()
    category: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    @Column({
        default: true,
    })
    is_active: boolean;

}

export { Products }