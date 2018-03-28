const config = {};

config.FIRESTORE_TX_ROOT = '';

config.GCLOUD_PUBSUB_MAX_MESSAGES = 10;
config.GCLOUD_PUBSUB_MAX_WAIT = 1000;
config.GCLOUD_PUBSUB_ENABLE = false;

// Queue mode, either 'RETRY' or 'POLL'
config.QUEUE_MODE = 'POLL';

// -----------------------------------
// Common configs
// -----------------------------------

// Number of milliseconds before re-enqueuing a transaction
config.TX_LOOP_INTERVAL = 30 * 1000;

// Minimum number of milliseconds between each loop iteration
config.FETCH_INTERVAL = 1000;

// Number of milliseconds before a transaction is set to timeout state
config.TIME_LIMIT = 24 * 60 * 60 * 1000;

// Maximum number of transactions to watch per query
config.MAX_TX_IN_QUEUE = 1000;

// Number of milliseconds before a transaction is put into queue
config.TIME_BEFORE_FIRST_ENQUEUE = 60 * 1000;

// Number of block needed after the mined block to confirm the transaction status
config.CONFIRMATION_NEEDED = 5;

// Queries to watch
// The elements of first level array are 'OR'ed
// The elements of second level array are 'AND'ed
// e.g.
//
//   [
//     [['a', '==', 1], ['b', '==', 2]],
//     [['a', '==', 3], ['b', '==', 4]],
//   ]
//
// is conceptually equivalent to
//
//   '(a == 1 AND b == 2) OR (a == 3 AND b == 4)'
//
// which actually generates 2 queries:
//
//   txRef.where('a', '==', 1).where('b', '==', 2).orderBy('ts')...
//   txRef.where('a', '==', 3).where('b', '==', 4).orderBy('ts')...
//
// Note that you need an index for each of the combined queries on orderBy('ts')

config.WATCH_QUERIES = [
  [['status', '==', 'pending']],
];

// -----------------------------------
// Retry-specific configs
// -----------------------------------

// Number of milliseconds before re-enqueuing a transaction if not found
config.RETRY_NOT_FOUND_INTERVAL = 10 * 1000;

// Number of consecutive STATUS.NOT_FOUND before retry
config.NOT_FOUND_COUNT_BEFORE_RETRY = 3;

// Gas price for replacement transactions in wei
config.REPLACEMENT_GAS_PRICE = '40000000000';

module.exports = config;
