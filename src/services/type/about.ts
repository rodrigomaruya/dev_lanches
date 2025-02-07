export interface AboutProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      about: {
        aboutbanner: {
          url: string;
        };
        title: string;
        description: string;
      };
      contact: {
        address: string;
        cell_phone: string;
      };
      opening_hours: {
        time: string;
        date: string;
        map: string;
      };
    };
  };
}
