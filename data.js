        var response = { 
                        "datasets": [
                          {
                            "version": "v1",
                            "data": {
                              "id": "kbtq1gagw",
                              "label": "locations(2).csv",
                              "color": [
                                162,
                                212,
                                171
                              ],

                              "allData": [          

                                [
                                  584,
                                  -34.805666,
                                  -56.22191,
                                  358,
                                  "2018-09-18 08:33:00",
                                  "2018-09-18 08:58:00"
                                ],
                                [
                                  585,
                                  -34.873574,
                                  -56.215816,
                                  1,
                                  "2018-08-15 15:26:00",
                                  "2018-08-15 15:49:00"
                                ]
                              ],
                              "fields": [
                                {
                                  "name": "column_0",
                                  "type": "integer",
                                  "format": ""
                                },
                                {
                                  "name": "Acidente_lat",
                                  "type": "real",
                                  "format": ""
                                },
                                {
                                  "name": "Acidente_lng",
                                  "type": "real",
                                  "format": ""
                                },
                                {
                                  "name": "Cluster",
                                  "type": "integer",
                                  "format": ""
                                },
                                {
                                  "name": "T_inicial",
                                  "type": "timestamp",
                                  "format": "YYYY-M-D H:m:s"
                                },
                                {
                                  "name": "T_final",
                                  "type": "timestamp",
                                  "format": "YYYY-M-D H:m:s"
                                }
                              ]
                            }
                          }
                        ],
                        "config": {
                          "version": "v1",
                          "config": {
                            "visState": {
                              "filters": [
                                {
                                  "dataId": "kbtq1gagw",
                                  "id": "vye9fhy14",
                                  "name": "T_inicial",
                                  "type": "timeRange",
                                  "value": [
                                    1534280682000,
                                    1534361028000
                                  ],
                                  "enlarged": true,
                                  "plotType": "histogram",
                                  "yAxis": null
                                }
                              ],
                              "layers": [
                                {
                                  "id": "59snew4",
                                  "type": "point",
                                  "config": {
                                    "dataId": "kbtq1gagw",
                                    "label": "acidente",
                                    "color": [
                                      246,
                                      209,
                                      138,
                                      255
                                    ],
                                    "columns": {
                                      "lat": "Acidente_lat",
                                      "lng": "Acidente_lng",
                                      "altitude": null
                                    },
                                    "isVisible": true,
                                    "visConfig": {
                                      "radius": 10,
                                      "fixedRadius": false,
                                      "opacity": 0.8,
                                      "outline": false,
                                      "thickness": 2,
                                      "colorRange": {
                                        "name": "Uber Viz Qualitative 4",
                                        "type": "qualitative",
                                        "category": "Uber",
                                        "colors": [
                                          "#12939A",
                                          "#DDB27C",
                                          "#88572C",
                                          "#FF991F",
                                          "#F15C17",
                                          "#223F9A",
                                          "#DA70BF",
                                          "#125C77",
                                          "#4DC19C",
                                          "#776E57",
                                          "#17B8BE",
                                          "#F6D18A",
                                          "#B7885E",
                                          "#FFCB99",
                                          "#F89570",
                                          "#829AE3",
                                          "#E79FD5",
                                          "#1E96BE",
                                          "#89DAC1",
                                          "#B3AD9E"
                                        ],
                                        "reversed": false
                                      },
                                      "radiusRange": [
                                        0,
                                        50
                                      ],
                                      "hi-precision": false
                                    },
                                    "textLabel": {
                                      "field": null,
                                      "color": [
                                        255,
                                        255,
                                        255
                                      ],
                                      "size": 50,
                                      "offset": [
                                        0,
                                        0
                                      ],
                                      "anchor": "middle"
                                    }
                                  },
                                  "visualChannels": {
                                    "colorField": {
                                      "name": "Cluster",
                                      "type": "integer"
                                    },
                                    "colorScale": "quantile",
                                    "sizeField": null,
                                    "sizeScale": "linear"
                                  }
                                }
                              ],
                              "interactionConfig": {
                                "tooltip": {
                                  "fieldsToShow": {
                                    "kbtq1gagw": [
                                      "column_0",
                                      "Cluster",
                                      "T_inicial",
                                      "T_final"
                                    ]
                                  },
                                  "enabled": true
                                },
                                "brush": {
                                  "size": 0.5,
                                  "enabled": false
                                }
                              },
                              "layerBlending": "normal",
                              "splitMaps": []
                            },
                            "mapState": {
                              "bearing": 0,
                              "dragRotate": false,
                              "latitude": -34.876590326618896,
                              "longitude": -56.18178206744958,
                              "pitch": 0,
                              "zoom": 11.869251209917437,
                              "isSplit": false
                            },
                            "mapStyle": {
                              "styleType": "dark",
                              "topLayerGroups": {},
                              "visibleLayerGroups": {
                                "label": true,
                                "road": true,
                                "border": false,
                                "building": true,
                                "water": true,
                                "land": true
                              },
                              "mapStyles": {}
                            }
                          }
                        },
                        "info": {
                          "app": "kepler.gl",
                          "created_at": "Thu Oct 18 2018 22:04:13 GMT-0300 (Hora oficial do Brasil)"
                        }
                      }