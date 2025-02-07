export interface HeroProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      hero: {
        banner: {
          url: string;
        };
        title: string;
        subtitle: string;
        btn_title: string;
        btn_url: string;
      };
    };
  };
}
