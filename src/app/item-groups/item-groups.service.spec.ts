import { TestBed } from '@angular/core/testing';
import { ItemGroupsService } from './item-groups.service';
import { Item } from './models/item';
import { ItemGroup } from './models/item-group';

describe('ItemGroupsService', () => {
  let service: ItemGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ItemGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert items to item groups', () => {
    const items = buildItems();
    const actualItemGroups = service.convertToItemGroups(items);
    expect(actualItemGroups).toEqual(buildItemGroups());
  });

  it('should convert item groups to items', () => {
    const itemGroups = buildItemGroups();
    const actualItems = service.convertToItems(itemGroups);
    expect(actualItems).toEqual(buildItems());
  });

  const buildItems = (): Item[] => [
    {
      id: 1,
      title: 'apple',
      price: 12,
    },
    {
      id: 1,
      title: 'apple',
      price: 12,
    },
    {
      id: 1,
      title: 'apple',
      price: 12,
    },
    {
      id: 13,
      title: 'pineapple',
      price: 25,
    },
    {
      id: 21,
      title: 'peach',
      price: 5,
    },
    {
      id: 21,
      title: 'peach',
      price: 5,
    },
    {
      id: 21,
      title: 'peach',
      price: 5,
    },
    {
      id: 21,
      title: 'peach',
      price: 5,
    },
    {
      id: 21,
      title: 'peach',
      price: 5,
    }
  ];

  const buildItemGroups = (): ItemGroup[] => [
    {
      itemId: 1,
      itemTitle: 'apple',
      itemPrice: 12,
      amount: 3,
      totalPrice: 36
    },
    {
      itemId: 13,
      itemTitle: 'pineapple',
      itemPrice: 25,
      amount: 1,
      totalPrice: 25
    },
    {
      itemId: 21,
      itemTitle: 'peach',
      itemPrice: 5,
      amount: 5,
      totalPrice: 25
    }
  ];
});
