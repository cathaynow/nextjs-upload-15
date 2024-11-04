import { pinata } from "../lib/pinata";

async function getData() {
  //fetch db

  const url = await pinata.gateways
    .createSignedURL({
      cid: "bafkreihw5l5zapceghl2wheyexj6c5igsgubihw7mmzi2aqsyzt6eq7m2a",
      expires: 30,
    })
    .optimizeImage({
      width: 500,
      height: 500,
      format: "webp",
      quality: 70,
    });

  return url;
}

export default async function HelloRoute() {
  const data = await getData();

  return (
    <div>
      <img src={data} alt="image" />
    </div>
  );
}
