export function getListData() {
  return new Promise((resolve, reject) => {
    fetch('/api/list')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.code === 0 && data.message === 'success') {
          resolve(data.data.list);
        } else {
          reject(data);
        }
      });
  });
}
