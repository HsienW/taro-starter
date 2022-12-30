const decorator = (function () {
  const before = function (target, handler) {
    let self = target;

    return function () {
      handler.apply(this, arguments);
      return self.apply(this, arguments);
    }
  }

  const after = function (target, handler) {
    let self = target;

    return function () {
      let selfReference = self.apply(this, arguments);
      handler.apply(this, arguments);
      return selfReference;
    }
  }

  return {
    before: before,
    after: after
  }
})();

export {
  decorator
};
