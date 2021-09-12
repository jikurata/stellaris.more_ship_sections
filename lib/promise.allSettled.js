'use strict';
if (!Promise.allSettled) {
  Promise.allSettled = a => {
    const promises = a.map((p, i) => {
      return p
      .then(value => ({
        status: "fulfilled",
        value,
      }))
      .catch(reason => ({
        status: "rejected",
        reason,
      }));
    });
    return Promise.all(promises);
  }
}
