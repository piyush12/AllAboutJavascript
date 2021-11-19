/**
 * _.get(object, path, [defaultValue]) is a handy method to help retrieving data from an arbitrary object. if the resolved value from path is undefined, defaultValue is returned.ˀ
 */

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

get(obj, "a.b.c"); // [1,2,3]
get(obj, "a.b.c.0"); // 1
get(obj, "a.b.c[1]"); // 2
get(obj, ["a", "b", "c", "2"]); // 3
get(obj, "a.b.c[3]"); // undefined
get(obj, "a.c", "bfe"); // 'bfe'

function get(obj, path, defaultValue) {
  const parts = Array.isArray(path)
    ? path
    : path.split(/[\]\[\.]/).filter(Boolean);
  let attempt = obj;
  //console.log(parts);
  for (let part of parts) {
      if(attempt === null || attempt[part] === undefined) return defaultValue
      attempt = attempt[part]
  }
  return attempt
}
