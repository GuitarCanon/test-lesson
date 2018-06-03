report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\test-lesson_qqmap_0_document_0_iphone6.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20180602-191324\\test-lesson_qqmap_0_document_0_iphone6.png",
        "selector": "document",
        "fileName": "test-lesson_qqmap_0_document_0_iphone6.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "5.54",
          "analysisTime": 64
        },
        "diffImage": "..\\..\\..\\backstop_data\\bitmaps_test\\20180602-191324\\failed_diff_test-lesson_qqmap_0_document_0_iphone6.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\test-lesson_qqmap_0_document_1_tablet.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20180602-191324\\test-lesson_qqmap_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "test-lesson_qqmap_0_document_1_tablet.png",
        "label": "qqmap",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "error": "Reference file not found D:\\yideng\\code\\test-lesson\\backstop_data\\bitmaps_reference\\test-lesson_qqmap_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "test-lesson"
});