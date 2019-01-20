import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { ItemGroup } from './models/item-group';

@Injectable({
  providedIn: 'root'
})
export class ItemGroupsService {
  public convertToItemGroups(items: Item[]): ItemGroup[] {
    return [];
  }

  public convertToItems(itemGroups: ItemGroup[]): Item[] {
    return [];
  }
}
