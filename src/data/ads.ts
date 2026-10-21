import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Keys match ad-placement-manifest.json exactly; real Adsterra codes for this
// site's approved inventory were supplied by the Adsterra Integrator.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "<script>\n  atOptions = {\n    'key' : '3c840e882f8ea7ebfcf29216f558d3a7',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/3c840e882f8ea7ebfcf29216f558d3a7\"></script>",
    "page-top-468x60": "<script>\n  atOptions = {\n    'key' : 'a2e227c0686ca758949dbf1c4c7484c1',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/a2e227c0686ca758949dbf1c4c7484c1\"></script>",
    "page-top-320x50": "<script>\n  atOptions = {\n    'key' : '520135ad56484dee48f75d940aeb874d',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/520135ad56484dee48f75d940aeb874d\"></script>",
    "home-topic-break-728x90": "<script>\n  atOptions = {\n    'key' : '3c840e882f8ea7ebfcf29216f558d3a7',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/3c840e882f8ea7ebfcf29216f558d3a7\"></script>",
    "home-topic-break-468x60": "<script>\n  atOptions = {\n    'key' : 'a2e227c0686ca758949dbf1c4c7484c1',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/a2e227c0686ca758949dbf1c4c7484c1\"></script>",
    "home-topic-break-300x250": "<script>\n  atOptions = {\n    'key' : '2406356d962fbb41b692bfac5403efc4',\n    'format' : 'iframe',\n    'height' : 250,\n    'width' : 300,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/2406356d962fbb41b692bfac5403efc4\"></script>",
    "home-directory-end-468x60": "<script>\n  atOptions = {\n    'key' : 'a2e227c0686ca758949dbf1c4c7484c1',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/a2e227c0686ca758949dbf1c4c7484c1\"></script>",
    "home-directory-end-320x50": "<script>\n  atOptions = {\n    'key' : '520135ad56484dee48f75d940aeb874d',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/520135ad56484dee48f75d940aeb874d\"></script>",
    "guide-native-native-banner": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/46b002c0a7692ca2d9957ead2f4f10bb\"></script>\n<div id=\"container-46b002c0a7692ca2d9957ead2f4f10bb\"></div>",
    "guide-section-break-728x90": "<script>\n  atOptions = {\n    'key' : '3c840e882f8ea7ebfcf29216f558d3a7',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/3c840e882f8ea7ebfcf29216f558d3a7\"></script>",
    "guide-section-break-468x60": "<script>\n  atOptions = {\n    'key' : 'a2e227c0686ca758949dbf1c4c7484c1',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/a2e227c0686ca758949dbf1c4c7484c1\"></script>",
    "guide-section-break-320x50": "<script>\n  atOptions = {\n    'key' : '520135ad56484dee48f75d940aeb874d',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/520135ad56484dee48f75d940aeb874d\"></script>",
    "guide-before-faq-468x60": "<script>\n  atOptions = {\n    'key' : 'a2e227c0686ca758949dbf1c4c7484c1',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/a2e227c0686ca758949dbf1c4c7484c1\"></script>",
    "guide-before-faq-320x50": "<script>\n  atOptions = {\n    'key' : '520135ad56484dee48f75d940aeb874d',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/520135ad56484dee48f75d940aeb874d\"></script>",
    "guide-rail-160x600": "<script>\n  atOptions = {\n    'key' : '7f2d906a55f698a13506a39d6b0593f3',\n    'format' : 'iframe',\n    'height' : 600,\n    'width' : 160,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/7f2d906a55f698a13506a39d6b0593f3\"></script>",
    "guide-rail-160x300": "<script>\n  atOptions = {\n    'key' : '7707a7363f2c5f0d84c3088909062767',\n    'format' : 'iframe',\n    'height' : 300,\n    'width' : 160,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/7707a7363f2c5f0d84c3088909062767\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/a081494017f82d184b84661b5924e938",
  },
};

export const adInventory = inventory;
