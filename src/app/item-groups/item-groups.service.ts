import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { ItemGroup } from './models/item-group';

@Injectable({
  providedIn: 'root'
})
export class ItemGroupsService {
  public convertToItemGroups(items: Item[]): ItemGroup[] {
    const itemGroups: Map<number, ItemGroup> = new Map();
    for (const item of items) {
      const itemGroup = itemGroups.get(item.id) || this.buildItemGroup(item);
      itemGroup.amount += 1;
      itemGroup.totalPrice += item.price;
      itemGroups.set(item.id, itemGroup);
    }
    return Array.from(itemGroups.values());
  }

  private buildItemGroup(item: Item): ItemGroup {
    return {
      itemId: item.id,
      itemTitle: item.title,
      itemPrice: item.price,
      amount: 0,
      totalPrice: 0
    };
  }

  public convertToItems(itemGroups: ItemGroup[]): Item[] {
    const items: Item[] = [];
    for (const itemGroup of itemGroups) {
      const itemsFromGroup = this.convertSingleGroupToItems(itemGroup);
      items.push(...itemsFromGroup);
    }
    return items;
  }

  private convertSingleGroupToItems(itemGroup: ItemGroup): Item[] {
    const items: Item[] = [];
    for (let i = 0; i < itemGroup.amount; i++) {
      const item = this.buildItem(itemGroup);
      items.push(item);
    }
    return items;
  }

  private buildItem(itemGroup: ItemGroup): Item {
    return {
      id: itemGroup.itemId,
      title: itemGroup.itemTitle,
      price: itemGroup.itemPrice
    };
  }
}
