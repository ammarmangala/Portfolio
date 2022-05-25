import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'o4vj4ban',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skwMT4EoEFT1vccLtb55u1EMHmqzFCYzfJioRK9NruSWgJjKg0DIldMXcRN5CrJcfoYhHWTZFbtP2TLcVlpm6g0taRt5fPYCOLBFNdrLDdcatrl2HXCj8T3P9pDVDcIk8iAdzyt5JxGEkOx0bHmV5ZPXZUYCtsueH1VE6f4iEqiA4M1CxrbQ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);