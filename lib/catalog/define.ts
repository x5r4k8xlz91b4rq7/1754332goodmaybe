import type { Product, ProductCategory } from '../products';

type Seed = Omit<Partial<Product>, 'category' | 'id'> &
  Pick<Product, 'slug' | 'brand' | 'name' | 'description' | 'badge' | 'tags'>;

export function defineProducts(
  category: ProductCategory,
  defaults: Partial<Product> & { gallery: string[] },
  seeds: Seed[]
): Product[] {
  return seeds.map((seed) => ({
    price: null,
    status: 'Sourcing',
    featured: false,
    newArrival: false,
    highScarcity: false,
    trending: false,
    image: null,
    ...defaults,
    ...seed,
    id: seed.slug,
    category,
  }));
}
