import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      throw new Error(`Item with id ${id} not found`);
    }
    return item;
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    item.status = 'SOLD_OUT';
    return item;
  }

  delete(id: string){ //指定したidのアイテム以外がの残る
    this.items = this.items.filter((item) => item.id !== id);
  }
}
