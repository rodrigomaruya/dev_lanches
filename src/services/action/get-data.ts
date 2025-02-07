export async function getSlug() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/objects?pretty=true&query=%7B%22type%22%3A%22products%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`,
      { next: { revalidate: 240 } }
    );

    if (!res.ok) {
      throw new Error("Failed get slug");
    }
    return res.json();
  } catch (error) {
    throw new Error("Failed get slug");
  }
}

export async function getHero() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/objects/678baa05c41bec43e43306cd?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 240 } }
    );
    if (!res.ok) {
      throw new Error("Failed get hero");
    }
    return res.json();
  } catch (error) {
    throw new Error("Failed get hero");
  }
}

export async function getAbout() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/objects/678ba94cc41bec43e43306c9?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 240 } }
    );
    if (!res.ok) {
      throw new Error("Failed get home");
    }
    return res.json();
  } catch (error) {
    throw new Error("Failed get home");
  }
}

export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_URL_API}/objects`;

  //Definindo o objeto de consulta pelo slug

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: "slug,title,content,metadata",
    read_key: process.env.READ_KEY as string,
  });
  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 240 } });
    if (!res.ok) {
      throw new Error("Failed get item by slug");
    }
    return res.json();
  } catch (error) {
    throw new Error("Failed get item by slug");
  }
}

export async function getTakeOut() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/objects?pretty=true&query=%7B%22type%22:%22products%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 240 } }
    );
    if (!res.ok) {
      throw new Error("Failed get home");
    }
    return res.json();
  } catch (error) {
    throw new Error("Failed get home");
  }
}
