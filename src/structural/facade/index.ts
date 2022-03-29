import * as lodash from 'lodash';

class CollectionOrder {
  orderBy(collection: any, field: string) {
    lodash.orderBy(collection, field);
    // may have other logic here...
  }
}

// CollectionOrder is a facade of lodash
// CollectionOrder is simpler than lodash
// CollectionOrder decouples the usage of lodash, i.e. we can work on different libs without too much effort
