const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

const checkError = (status) => {
  if (status >= 400) {
    throw new Error("エラーが発生しました。時間を置いて再度お試しください。");
  }
};

//値の取得（GET）
export const get = async (path) => {
  const resp = await fetch(url(path));
  checkError(resp.status);
  const result = await resp.json();

  return result;
};

//値の追加（POST）
export const post = async (path, body) => {
  const options = { ...header, method: "POST", body: JSON.stringify(body) };

  //bodyやmethod、headerを合わせてfetch()のオプションとして指定

  const resp = await fetch(url(path), options);

  checkError(resp.status);

  const result = await resp.json();

  return result;
};

//jsのdeleteと名前が被ってエラーになるので名前を変えています
export const deleteRequest = async (path) => {
  const options = { method: "DELETE" };

  const resp = await fetch(url(path), options);
  checkError(resp.status);
  await fetch(url(path), options);

  //204 No Contentが返ってくるので成功の場合は何もreturnしない
  return;
};
