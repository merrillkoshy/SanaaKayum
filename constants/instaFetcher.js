import axios from "axios";

var instaShortCodesMap = [];
const resp = axios
  .get(`https://www.instagram.com/sanaa_kayum/?__a=1`)
  .then(response => {
    var packet = response.data.graphql.user.edge_owner_to_timeline_media.edges;
    packet.map(
      (element, i) => (instaShortCodesMap[i] = element.node.shortcode)
    );
    return instaShortCodesMap;
  });

export default resp;
