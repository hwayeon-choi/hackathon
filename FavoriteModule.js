const localhost = "10.0.2.2"
const port = "3000"

/* 찜 여부 확인 */
const getLikeOX = (userId, placeId) => {
  fetch(`http://${localhost}:${port}/likeOX?userId=${userId}&placeId=${placeId}`)
  .then((res) => res.json())
  .then((data) => console.log(data))
}

/* 찜하기 & 찜취소 */
const postLike = (order, userId, placeId) => {
  fetch(`http://${localhost}:${port}/${order}?userId=${userId}&placeId=${placeId}`)
  .then((res) => res.json())
  .then((data) => console.log(data))
}

/* 이겅 안됨 ㅠㅠ
const postLike = (order, userId, placeId) => {
  fetch(`http://${localhost}:${port}/${order}`, { // like, dislike
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      placeId: placeId
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
} */

/* 위시리스트 */
const getWishlist = (userId, placeId) => {
  fetch(`http://${localhost}:${port}/wishlist?userId=${userId}&placeId=${placeId}`)
    .then((res) => res.json())
    .then((data) => console.log(data)); //자바스크립트 객체 형식으로 변환된다.
}

/* 위시리스트 */
const getPopular = () => {
  fetch(`http://${localhost}:${port}/popular`) 
  .then((res) => res.json())
  .then((data) => console.log(data));
}

export default { getLikeOX, postLike, getWishlist, getPopular };