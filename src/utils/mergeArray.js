const mergeArray = (a) => {
  return a.reduce(function(p, c) {
      if (p.indexOf(c) < 0) p.push(c);
      return p;
  }, []);
};

export default mergeArray;