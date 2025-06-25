export interface MenuDescription {
  key: string;
  description: string;
  perks: string[];
  callToAction: string;
}

export const menuDescriptions: MenuDescription[] = [
  {
    key: "przyjecia-okolicznosciowe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan.",
    perks: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Integer molestie lorem at massa",
      "Facilisis in pretium nisl aliquet"
    ],
    callToAction: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },
  {
    key: "imprezy-firmowe",
    description: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.",
    perks: [
      "Quis risus eget urna mollis",
      "Vestibulum id ligula porta",
      "Maecenas faucibus mollis interdum",
      "Etiam porta sem malesuada magna mollis"
    ],
    callToAction: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
  },
  {
    key: "dla-firm",
    description: "Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    perks: [
      "Cras ultricies ligula sed magna",
      "Vivamus suscipit tortor eget felis",
      "Sed porttitor lectus nibh"
    ],
    callToAction: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
  },
  {
    key: "swiateczny-na-wynos",
    description: "Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    perks: [
      "Tempor nec feugiat nisl pretium",
      "Donec sollicitudin molestie malesuada",
      "Quisque velit nisi pretium ut lacinia in"
    ],
    callToAction: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

