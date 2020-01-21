export const mockedIssues = [
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13579",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13579",
    "key": "KF-778",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Försöker en användare ändra namn på en existerande musikgrupp blir det databasfel i Aveny.</p>\n\n<p>\"Cannot find the object \"MU_Anteckningar\" because it does not exist or you do not have persmissions.\" while executing SQL: sp_mu_change_group @fran_grupp = 'Värö församling', @till_grupp = 'Musiktest församling'.\"</p>\n\n<p>*Att göra:<br/>\n*Tillåta användare att ändra namn på befintliga musikgrupper</p>\n\n\n<p><span class=\"image-wrap\" style=\"\"><a id=\"11299_thumb\" href=\"/secure/attachment/11299/11299_image-2019-12-05-13-29-19-613.png\" title=\"image-2019-12-05-13-29-19-613.png\" file-preview-type=\"image\" file-preview-id=\"11299\" file-preview-title=\"image-2019-12-05-13-29-19-613.png\"><jira-attachment-thumbnail url=\"https://eniacdata.atlassian.net/secure/thumbnail/11299/image-2019-12-05-13-29-19-613.png?default=false\" jira-url=\"https://eniacdata.atlassian.net/secure/thumbnail/11299/image-2019-12-05-13-29-19-613.png\" filename=\"image-2019-12-05-13-29-19-613.png\"><img src=\"https://eniacdata.atlassian.net/secure/thumbnail/11299/image-2019-12-05-13-29-19-613.png\" data-attachment-name=\"image-2019-12-05-13-29-19-613.png\" data-attachment-type=\"thumbnail\" data-media-services-id=\"0f94d75d-5a22-4f59-a605-6938d7adda9a\" data-media-services-type=\"file\" style=\"border: 0px solid black\" /></jira-attachment-thumbnail></a></span> </p>",
      "customfield_10034": "Databasfel om en anv&#xE4;ndare f&#xF6;rs&#xF6;ker &#xE4;ndra namn p&#xE5; Musikgrupp",
      "customfield_10035": "Felet &#xE4;r r&#xE4;ttat i denna version av Aveny. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Databasfel om en användare försöker ändra namn på Musikgrupp",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10015",
          "id": "10015",
          "name": "Musik"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Försöker en användare ändra namn på en existerande musikgrupp blir det databasfel i Aveny."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "\"Cannot find the object \"MU_Anteckningar\" because it does not exist or you do not have persmissions.\" while executing SQL: sp_mu_change_group @fran_grupp = 'Värö församling', @till_grupp = 'Musiktest församling'.\""
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "*Att göra:"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "*Tillåta användare att ändra namn på befintliga musikgrupper"
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "0f94d75d-5a22-4f59-a605-6938d7adda9a",
                  "type": "file",
                  "collection": "jira-13579-field-description",
                  "width": 200,
                  "height": 183
                }
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": " "
              }
            ]
          }
        ]
      },
      "customfield_10034": "Databasfel om en användare försöker ändra namn på Musikgrupp",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Felet är rättat i denna version av Aveny. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13396",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13396",
    "key": "KF-692",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Vi brukade visa datum och tid när etiketterna skrevs ut.<br/>\nLandskrona säger att det finns stort behöv för dessa uppgifter.</p>",
      "customfield_10034": "Datum och tid p&#xE5; etiketter",
      "customfield_10035": "Det st&#xE5;r nu datum och tid p&#xE5; etiketterna fr&#xE5;n bis&#xE4;ttningsjournalen.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Datum/tid på kistetikett och urnetikett",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10016",
          "id": "10016",
          "name": "Bisättningsjournal"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vi brukade visa datum och tid när etiketterna skrevs ut."
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Landskrona säger att det finns stort behöv för dessa uppgifter."
              }
            ]
          }
        ]
      },
      "customfield_10034": "Datum och tid på etiketter",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Det står nu datum och tid på etiketterna från bisättningsjournalen."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13279",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13279",
    "key": "KF-664",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Beskrivning:</b><br/>\nMånga av våra användare använder funktionen \"Vecka\" när de ska kika i kalendern i Aveny Bokning. Det gör att när de ska boka så markeras automatiskt alla resurser som är aktiva i kalendern och användaren måste <ins>avmarkera</ins> de resurser som inte ska ingå i bokningen. </p>\n\n<p>Vi har många gånger tidigare fått önskemål om en knapp som \"Avmarkera\" samtliga resurser, så att användaren får chans att välja ut de resurser som ska ingå i bokningen istället. </p>\n\n<p><b>Att göra:</b><br/>\nLägg till en knapp som heter \"Avmarkera alla\" (samma knapp finns i fönstret \"Kalender - Resurs\"). När användaren klickar på knappen ska samtliga resurser avmarkeras och användaren får möjlighet att själv klicka för den eller de resurser som ska ingå i bokningen. </p>\n\n<p>Markerar användaren inga resurser ska knappen “OK“ som vanligt vara grå och ej klickbar. </p>\n\n<p><span class=\"error\">Unable to render embedded object: File (image-2019-11-12-08-08-49-444.png) not found.</span></p>\n\n",
      "customfield_10034": "&quot;Avmarkera alla&quot;-knapp f&#xF6;r att avmarkera resurser i f&#xF6;nstret &quot;Aktivitetsval&quot;",
      "customfield_10035": "Det finns nu m&#xF6;jlighet att anv&#xE4;nda en knapp som heter &quot;Avmarkera alla&quot; om bokning g&#xF6;rs fr&#xE5;n exempelvis veckovyn, som bockar f&#xF6;r alla resurser i kalendern automatiskt. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "\"Avmarkera alla\"-knapp för att avmarkera resurser i fönstret \"Aktivitetsval\"",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Beskrivning:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Många av våra användare använder funktionen \"Vecka\" när de ska kika i kalendern i Aveny Bokning. Det gör att när de ska boka så markeras automatiskt alla resurser som är aktiva i kalendern och användaren måste "
              },
              {
                "type": "text",
                "text": "avmarkera",
                "marks": [
                  {
                    "type": "underline"
                  }
                ]
              },
              {
                "type": "text",
                "text": " de resurser som inte ska ingå i bokningen. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vi har många gånger tidigare fått önskemål om en knapp som \"Avmarkera\" samtliga resurser, så att användaren får chans att välja ut de resurser som ska ingå i bokningen istället. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Att göra:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lägg till en knapp som heter \"Avmarkera alla\" (samma knapp finns i fönstret \"Kalender - Resurs\"). När användaren klickar på knappen ska samtliga resurser avmarkeras och användaren får möjlighet att själv klicka för den eller de resurser som ska ingå i bokningen. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Markerar användaren inga resurser ska knappen “OK“ som vanligt vara grå och ej klickbar. "
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "UNKNOWN_MEDIA_image-2019-11-12-08-08-49-444.png",
                  "type": "file",
                  "collection": "jira-13279-field-description",
                  "width": 200,
                  "height": 183
                }
              }
            ]
          }
        ]
      },
      "customfield_10034": "\"Avmarkera alla\"-knapp för att avmarkera resurser i fönstret \"Aktivitetsval\"",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Det finns nu möjlighet att använda en knapp som heter \"Avmarkera alla\" om bokning görs från exempelvis veckovyn, som bockar för alla resurser i kalendern automatiskt. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13276",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13276",
    "key": "KF-662",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Nedan scenario baseras på att det redan finns aktiviteter bokade med resurser inbokade som i efterhand får frånvaro registrerad i FLEX.</p>\n\n<ul>\n\t<li>Färgmarkera de resurser vars bokningstid överlappar resursens ledighet i Flex med blått (på fliken “Gudstjänst“ osv)</li>\n</ul>\n\n\n\n\n\n\n<ul>\n\t<li><font color=\"#36b37e\">Visa ny kolumn på fliken “Bokningar“ där det visas vilken resurs som är frånvarande i Flex, samt varför. Kolumn längst till höger. Standard (gärna bakom option om möjligt)</font></li>\n\t<li><font color=\"#36b37e\">Rödmarkera resurs som är ledig i FLEX i rutan “Tjkjänstgöring“ i “Aktivitetsval“ (gäller när en ny bokning görs)</font></li>\n\t<li><font color=\"#36b37e\">Trepunktersknappen visar vilka resurser som är frånvarande i FLEX med röd text.</font></li>\n\t<li><font color=\"#36b37e\">Knappen “Tjänstgöring“ visar vilka resurser som är frånvarande i FLEX med rött samt ger ett varningsmeddelande om resursen ändå väljs</font></li>\n</ul>\n\n",
      "customfield_10034": "Hantera ledighet fr&#xE5;n FLEX i rutin &quot;Aktiviteter&quot;",
      "customfield_10035": "N&#xE4;r bokningar g&#xF6;rs i rutin aktiviteter med resurser som &#xE4;r fr&#xE5;nvarande enligt FLEX har det nu byggt in varningar som uppm&#xE4;rksammar anv&#xE4;ndaren p&#xE5; om en resurs &#xE4;r fr&#xE5;nvarande. <br/>\n<br/>\nFunktionen pilottestas och finns inte tillg&#xE4;nglig &#xE4;nnu. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Hantera ledighet från FLEX på aktiviteter",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nedan scenario baseras på att det redan finns aktiviteter bokade med resurser inbokade som i efterhand får frånvaro registrerad i FLEX."
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Färgmarkera de resurser vars bokningstid överlappar resursens ledighet i Flex med blått (på fliken “Gudstjänst“ osv)"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Visa ny kolumn på fliken “Bokningar“ där det visas vilken resurs som är frånvarande i Flex, samt varför. Kolumn längst till höger. Standard (gärna bakom option om möjligt)",
                        "marks": [
                          {
                            "type": "textColor",
                            "attrs": {
                              "color": "#36b37e"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Rödmarkera resurs som är ledig i FLEX i rutan “Tjkjänstgöring“ i “Aktivitetsval“ (gäller när en ny bokning görs)",
                        "marks": [
                          {
                            "type": "textColor",
                            "attrs": {
                              "color": "#36b37e"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Trepunktersknappen visar vilka resurser som är frånvarande i FLEX med röd text.",
                        "marks": [
                          {
                            "type": "textColor",
                            "attrs": {
                              "color": "#36b37e"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Knappen “Tjänstgöring“ visar vilka resurser som är frånvarande i FLEX med rött samt ger ett varningsmeddelande om resursen ändå väljs",
                        "marks": [
                          {
                            "type": "textColor",
                            "attrs": {
                              "color": "#36b37e"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          }
        ]
      },
      "customfield_10034": "Hantera ledighet från FLEX i rutin \"Aktiviteter\"",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "När bokningar görs i rutin aktiviteter med resurser som är frånvarande enligt FLEX har det nu byggt in varningar som uppmärksammar användaren på om en resurs är frånvarande. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Funktionen pilottestas och finns inte tillgänglig ännu. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13225",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13225",
    "key": "KF-653",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Använder man knappen Rep. bokn. i Kalendern för att repetera snabbokningnar får man ett internt fel där Aveny klagar på att fältet VARME_STANDARD inte hittas.</p>\n\n<p> <span class=\"image-wrap\" style=\"\"><a id=\"11163_thumb\" href=\"/secure/attachment/11163/11163_image-2019-11-08-10-37-04-436.png\" title=\"image-2019-11-08-10-37-04-436.png\" file-preview-type=\"image\" file-preview-id=\"11163\" file-preview-title=\"image-2019-11-08-10-37-04-436.png\"><jira-attachment-thumbnail url=\"https://eniacdata.atlassian.net/secure/thumbnail/11163/image-2019-11-08-10-37-04-436.png?default=false\" jira-url=\"https://eniacdata.atlassian.net/secure/thumbnail/11163/image-2019-11-08-10-37-04-436.png\" filename=\"image-2019-11-08-10-37-04-436.png\"><img src=\"https://eniacdata.atlassian.net/secure/thumbnail/11163/image-2019-11-08-10-37-04-436.png\" data-attachment-name=\"image-2019-11-08-10-37-04-436.png\" data-attachment-type=\"thumbnail\" data-media-services-id=\"73babf3e-9822-4d52-b133-6d15eecbfe79\" data-media-services-type=\"file\" style=\"border: 0px solid black\" /></jira-attachment-thumbnail></a></span> </p>",
      "customfield_10034": "Internt fel vid repetition av snabbokningar i kalendern",
      "customfield_10035": "I f&#xF6;reg&#xE5;ende version av Aveny kunde anv&#xE4;ndaren f&#xE5; ett felmeddelande n&#xE4;r en snabbokning repeterades. Felet &#xE4;r r&#xE4;ttat i denna version. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Internt fel vid repetition av snabbokningar i kalendern",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Använder man knappen Rep. bokn. i Kalendern för att repetera snabbokningnar får man ett internt fel där Aveny klagar på att fältet VARME_STANDARD inte hittas."
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "73babf3e-9822-4d52-b133-6d15eecbfe79",
                  "type": "file",
                  "collection": "jira-13225-field-description",
                  "width": 200,
                  "height": 183
                }
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": " "
              }
            ]
          }
        ]
      },
      "customfield_10034": "Internt fel vid repetition av snabbokningar i kalendern",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "I föregående version av Aveny kunde användaren få ett felmeddelande när en snabbokning repeterades. Felet är rättat i denna version. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13190",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13190",
    "key": "KF-640",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>När en barngrupp ska rapporteras in enligt åldersindelning via rutin \"Statistikrapportering\" i stora Aveny saknas vissa ålderskategorier. </p>\n\n\n\n<p><span class=\"image-wrap\" style=\"\"><img src=\"/secure/attachment/11161/11161_image-20191108-090138.png\" height=\"219\" width=\"114\" style=\"border: 0px solid black\" /></span></p>\n",
      "customfield_10034": "&#xC5;ldersindelning inkomplett i rutin &quot;Statistikrapportering&quot;",
      "customfield_10035": "I f&#xF6;reg&#xE5;ende version av Aveny hade vissa f&#xE4;lt f&#xF6;r &#xE5;ldersindelning fallit bort. Felet &#xE4;r r&#xE4;ttat i denna version av Aveny. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Åldersindelning inkomplett i rutin \"Statistikrapportering\"",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "När en barngrupp ska rapporteras in enligt åldersindelning via rutin \"Statistikrapportering\" i stora Aveny saknas vissa ålderskategorier. "
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "6fa70f32-a606-4d30-ba9b-52da52851222",
                  "type": "file",
                  "collection": "jira-13190-field-description",
                  "width": 114,
                  "height": 219
                }
              }
            ]
          }
        ]
      },
      "customfield_10034": "Åldersindelning inkomplett i rutin \"Statistikrapportering\"",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "I föregående version av Aveny hade vissa fält för åldersindelning fallit bort. Felet är rättat i denna version av Aveny. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13186",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13186",
    "key": "KF-638",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>I Aktuella kremationer hämtar vi avliden som står i aktuell lokal.<br/>\nLämnar vi in en \"tom urna\" så hämtar vi \"tom urnans\" placering till kistan.</p>\n\n<p>Det här är problem för bla Göteborg som bara vill ha dem som står i krematoriet på listan för Aktuella kremationer. <br/>\nNu lägger de tid på att leta efter en kista som som står på någon annan kyrkogård/kapell.</p>\n\n<p><span class=\"image-wrap\" style=\"\"><img src=\"/secure/attachment/11144/11144_image-20191106-130429.png\" height=\"140\" width=\"304\" style=\"border: 0px solid black\" /></span></p>\n\n<p>Tom urnan lämnades in i Krematoriet, men kistan står i Lukas kyrkan.</p>\n\n<p>I Aktuella kremationer visas:</p>\n\n<p><span class=\"image-wrap\" style=\"\"><img src=\"/secure/attachment/11145/11145_image-20191106-130534.png\" height=\"269\" width=\"371\" style=\"border: 0px solid black\" /></span></p>\n\n<p>Att göra:<br/>\nÄndra på kalkylerade fält HandelseStatus, se till att den ignorerar typ “T” Tom Urna.</p>",
      "customfield_10034": "Fel placering visas om &quot;Tom urna&quot; har l&#xE4;mnats in",
      "customfield_10035": "&#xC4;r den senaste inl&#xE4;mningen &quot;tom urna&quot; s&#xE5; har&quot; Aktuella kremationer&quot; inte visat placering p&#xE5; kistan. <br/>\nDet &#xE4;r nu r&#xE4;ttat och endast placering/urval fr&#xE5;n kistan visas.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Aktuella kremationer - fel vid inlämning av tom urna",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10016",
          "id": "10016",
          "name": "Bisättningsjournal"
        },
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10017",
          "id": "10017",
          "name": "Kremationsjournal"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "I Aktuella kremationer hämtar vi avliden som står i aktuell lokal."
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lämnar vi in en \"tom urna\" så hämtar vi \"tom urnans\" placering till kistan."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Det här är problem för bla Göteborg som bara vill ha dem som står i krematoriet på listan för Aktuella kremationer. "
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Nu lägger de tid på att leta efter en kista som som står på någon annan kyrkogård/kapell."
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "33f53eb9-1abd-4361-ade0-a7f33369d421",
                  "type": "file",
                  "collection": "jira-13186-field-description",
                  "width": 304,
                  "height": 140
                }
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Tom urnan lämnades in i Krematoriet, men kistan står i Lukas kyrkan."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "I Aktuella kremationer visas:"
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "3beec76d-3116-4e31-a525-2a6d74a14b36",
                  "type": "file",
                  "collection": "jira-13186-field-description",
                  "width": 371,
                  "height": 269
                }
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Att göra:"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Ändra på kalkylerade fält HandelseStatus, se till att den ignorerar typ “T” Tom Urna."
              }
            ]
          }
        ]
      },
      "customfield_10034": "Fel placering visas om \"Tom urna\" har lämnats in",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Är den senaste inlämningen \"tom urna\" så har\" Aktuella kremationer\" inte visat placering på kistan. "
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Det är nu rättat och endast placering/urval från kistan visas."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13162",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13162",
    "key": "KF-637",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Kan generera KS -</p>\n\n<p>Lägg upp ett meddelande med SQL- förfallodatum enligt betalningsvillkor där det inte redan finns ett förfallodatum på faktureringsunderlaget.</p>",
      "customfield_10034": "Fakturaunderlag som &#xE4;r skapat f&#xF6;re 11.9 g&#xE5;r inte att backa",
      "customfield_10035": "I f&#xF6;reg&#xE5;ende version av Aveny gick det inte att backa ett fakturaunderlag som skapats innan version 11.9 av Aveny. Felet &#xE4;r r&#xE4;ttat i denna version av Aveny. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Fakturaunderlag som är skapat före 11.9 går inte att backa (betalningsvillkor måste fyllas i).",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Kan generera KS -"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lägg upp ett meddelande med SQL- förfallodatum enligt betalningsvillkor där det inte redan finns ett förfallodatum på faktureringsunderlaget."
              }
            ]
          }
        ]
      },
      "customfield_10034": "Fakturaunderlag som är skapat före 11.9 går inte att backa",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "I föregående version av Aveny gick det inte att backa ett fakturaunderlag som skapats innan version 11.9 av Aveny. Felet är rättat i denna version av Aveny. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13160",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13160",
    "key": "KF-635",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Beskrivning:</b></p>\n\n<p>För att kunna varna om förändringar vid nästa hämttillfälle måste vi spara FLEX informationen.</p>",
      "customfield_10034": "Spara FLEX-fr&#xE5;nvaro i rutin  &quot;Tj&#xE4;nstg&#xF6;ring&quot;",
      "customfield_10035": "N&#xE4;r integration med FLEX aktiveras sparas inl&#xE4;st fr&#xE5;nvaro fr&#xE5;n FLEX i rutin &quot;Tj&#xE4;nstg&#xF6;ring&quot;. <br/>\n<br/>\nFunktionen pilottestas och finns inte tillg&#xE4;nglig &#xE4;nnu. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Spara FLEX-frånvaro i tjänstgöringen",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Beskrivning:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "För att kunna varna om förändringar vid nästa hämttillfälle måste vi spara FLEX informationen."
              }
            ]
          }
        ]
      },
      "customfield_10034": "Spara FLEX-frånvaro i rutin  \"Tjänstgöring\"",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "När integration med FLEX aktiveras sparas inläst frånvaro från FLEX i rutin \"Tjänstgöring\". "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Funktionen pilottestas och finns inte tillgänglig ännu. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13102",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13102",
    "key": "KF-594",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>I Webaveny \"Aktuella avlidna\" kan man söka på personer på avliden och få träff på listan.<br/>\nVi har fått in en Bugg som gör att det bara går att söka 1 gång, rensar man sedan fältet för att göra en ny sökning så får man ett internt fel.</p>\n\n<p>Det ska gå att rensa fältet och göra en ny sökning.<br/>\n <span class=\"image-wrap\" style=\"\"><a id=\"11056_thumb\" href=\"/secure/attachment/11056/11056_image-2019-10-29-14-42-34-244.png\" title=\"image-2019-10-29-14-42-34-244.png\" file-preview-type=\"image\" file-preview-id=\"11056\" file-preview-title=\"image-2019-10-29-14-42-34-244.png\"><jira-attachment-thumbnail url=\"https://eniacdata.atlassian.net/secure/thumbnail/11056/image-2019-10-29-14-42-34-244.png?default=false\" jira-url=\"https://eniacdata.atlassian.net/secure/thumbnail/11056/image-2019-10-29-14-42-34-244.png\" filename=\"image-2019-10-29-14-42-34-244.png\"><img src=\"https://eniacdata.atlassian.net/secure/thumbnail/11056/image-2019-10-29-14-42-34-244.png\" data-attachment-name=\"image-2019-10-29-14-42-34-244.png\" data-attachment-type=\"thumbnail\" data-media-services-id=\"07822765-02ac-4aaa-8271-490c7358e949\" data-media-services-type=\"file\" style=\"border: 0px solid black\" /></jira-attachment-thumbnail></a></span> </p>\n",
      "customfield_10034": "S&#xF6;k p&#xE5; personnummer i &quot;Aktuella avlidna&quot;",
      "customfield_10035": "R&#xE4;ttat: f&#xF6;r att s&#xF6;ka fler g&#xE5;nger i personnummerf&#xE4;ltet s&#xE5; var man tvungen att g&#xE5; ur rutinen i annat fall fick man ett internt fel.<br/>\nNu ska det g&#xE5; att rensa f&#xE4;ltet p&#xE5; tidigare s&#xF6;kningar och direkt kunna g&#xF6;ra en ny s&#xF6;kning.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Fel vid sök avliden i aktuella avlidna",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10016",
          "id": "10016",
          "name": "Bisättningsjournal"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "I Webaveny \"Aktuella avlidna\" kan man söka på personer på avliden och få träff på listan."
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Vi har fått in en Bugg som gör att det bara går att söka 1 gång, rensar man sedan fältet för att göra en ny sökning så får man ett internt fel."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Det ska gå att rensa fältet och göra en ny sökning."
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "07822765-02ac-4aaa-8271-490c7358e949",
                  "type": "file",
                  "collection": "jira-13102-field-description",
                  "width": 200,
                  "height": 183
                }
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": " "
              }
            ]
          }
        ]
      },
      "customfield_10034": "Sök på personnummer i \"Aktuella avlidna\"",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Rättat: för att söka fler gånger i personnummerfältet så var man tvungen att gå ur rutinen i annat fall fick man ett internt fel."
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Nu ska det gå att rensa fältet på tidigare sökningar och direkt kunna göra en ny sökning."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13029",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13029",
    "key": "KF-567",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "",
      "customfield_10034": "Felr&#xE4;ttning: Anv&#xE4;ndare kan inte l&#xE4;ggas upp",
      "customfield_10035": "F&#xF6;r enheter med vissa kombinationer av programoptioner kunde det intr&#xE4;ffa ett fel som gjorde att det inte gick att l&#xE4;gga till nya anv&#xE4;ndare.  Detta &#xE4;r nu &#xE5;tg&#xE4;rdat.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Användare kan inte läggas upp",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10031",
          "id": "10031",
          "name": "Grundsystem"
        }
      ],
      "description": null,
      "customfield_10034": "Felrättning: Användare kan inte läggas upp",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "För enheter med vissa kombinationer av programoptioner kunde det inträffa ett fel som gjorde att det inte gick att lägga till nya användare.  Detta är nu åtgärdat."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13016",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13016",
    "key": "KF-562",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Beskrivning:</b><br/>\nNär optionen för synkronisering med FLEX slås på behöver vi i Aveny-databasen kunna ange uppgifter gällande vilken FLEX-databas vi ska ställa frågorna mot. </p>\n\n<p>Bland annat behövs möjlighet att kunna ange:</p>\n\n<ul>\n\t<li>URL</li>\n\t<li>CustomerID (slå upp via org-nr)</li>\n\t<li>Username</li>\n\t<li>Password<br/>\nGår någon av dessa uppgifter att hämta <b>automatiskt?</b></li>\n</ul>\n\n\n<p>Fliken \"FLEX\" ska bara vara aktiv/synas om optionen för FLEX är påslagen. </p>",
      "customfield_10034": "Systeminst&#xE4;llningar f&#xF6;r tj&#xE4;nstg&#xF6;ringsintegration",
      "customfield_10035": "Det finns nu inst&#xE4;llningsm&#xF6;jligheter g&#xE4;llande tj&#xE4;nstg&#xF6;ringsintegration i systeminst&#xE4;llningar.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Skapa en ny flik för FLEX i \"Systeminställningar\"",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Beskrivning:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "När optionen för synkronisering med FLEX slås på behöver vi i Aveny-databasen kunna ange uppgifter gällande vilken FLEX-databas vi ska ställa frågorna mot. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Bland annat behövs möjlighet att kunna ange:"
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "URL"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "CustomerID (slå upp via org-nr)"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Username"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Password"
                      },
                      {
                        "type": "hardBreak"
                      },
                      {
                        "type": "text",
                        "text": "Går någon av dessa uppgifter att hämta "
                      },
                      {
                        "type": "text",
                        "text": "automatiskt?",
                        "marks": [
                          {
                            "type": "strong"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Fliken \"FLEX\" ska bara vara aktiv/synas om optionen för FLEX är påslagen. "
              }
            ]
          }
        ]
      },
      "customfield_10034": "Systeminställningar för tjänstgöringsintegration",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Det finns nu inställningsmöjligheter gällande tjänstgöringsintegration i systeminställningar."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12767",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12767",
    "key": "KF-465",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><span class=\"image-wrap\" style=\"\"><img src=\"/secure/attachment/10977/10977_image-20191015-095655.png\" height=\"290\" width=\"428\" style=\"border: 0px solid black\" /></span></p>\n",
      "customfield_10034": "Uppdaterat GBS-beh&#xF6;rig",
      "customfield_10035": "Vi har uppdaterat GBSbeh&#xF6;righeterna:<br/>\n<br/>\n3014 - Grav administrat&#xF6;r<br/>\nLagt till beh&#xF6;righet till nya rutinen Vanv&#xE5;rdsinventering i WebGrav<br/>\n<br/>\n3015 - Grav Arbetsledare<br/>\nLagt till beh&#xF6;righet till nya rutinen Vanv&#xE5;rdsinventering i WebGrav<br/>\n<br/>\n3016 - Grav expedition<br/>\nLagt till beh&#xF6;righet till nya rutinen Vanv&#xE5;rdsinventering i WebGrav<br/>\n<br/>\n3017 - Grav Kyrkog&#xE5;rdsarbetare<br/>\nLagt till l&#xE4;sbeh&#xF6;righet till nya rutinen Vanv&#xE5;rdsinventering i WebGrav<br/>\n<br/>\n3018 - Grav L&#xE4;sbeh&#xF6;righet<br/>\nLagt till l&#xE4;sbeh&#xF6;righet till nya rutinen Vanv&#xE5;rdsinventering i WebGrav<br/>\n<br/>\n3023 - Bis&#xE4;ttning administrat&#xF6;r<br/>\nLagt till beh&#xF6;righet till:<br/>\nTransportlistan i Aveny Bis&#xE4;ttningsjournal<br/>\nV&#xE4;lj lokal och Kortinloggning i WebAveny Aveny Bis&#xE4;ttningsjournal<br/>\n<br/>\n3001 - Bis&#xE4;ttning Expedition<br/>\nLagt till beh&#xF6;righet till:<br/>\nTransportlistan i Aveny Bis&#xE4;ttningsjournal<br/>\nV&#xE4;lj lokal och Kortinloggning i WebAveny Aveny Bis&#xE4;ttningsjournal<br/>\n<br/>\n3012 - Diarium expedition<br/>\nTagit bort beh&#xF6;righet till styrv&#xE4;rden i Diariet<br/>\n",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Uppdatera GAS-BAS med nya GBS-behörigheter för bla Vanvård i WebGrav",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10016",
          "id": "10016",
          "name": "Bisättningsjournal"
        },
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        },
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10012",
          "id": "10012",
          "name": "Grav"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "92fd744c-9642-4809-97d6-354828e8b076",
                  "type": "file",
                  "collection": "jira-12767-field-description",
                  "width": 428,
                  "height": 290
                }
              }
            ]
          }
        ]
      },
      "customfield_10034": "Uppdaterat GBS-behörig",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vi har uppdaterat GBSbehörigheterna:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "3014 - Grav administratör"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lagt till behörighet till nya rutinen Vanvårdsinventering i WebGrav"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "3015 - Grav Arbetsledare"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lagt till behörighet till nya rutinen Vanvårdsinventering i WebGrav"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "3016 - Grav expedition"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lagt till behörighet till nya rutinen Vanvårdsinventering i WebGrav"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "3017 - Grav Kyrkogårdsarbetare"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lagt till läsbehörighet till nya rutinen Vanvårdsinventering i WebGrav"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "3018 - Grav Läsbehörighet"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lagt till läsbehörighet till nya rutinen Vanvårdsinventering i WebGrav"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "3023 - Bisättning administratör"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lagt till behörighet till:"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Transportlistan i Aveny Bisättningsjournal"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Välj lokal och Kortinloggning i WebAveny Aveny Bisättningsjournal"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "3001 - Bisättning Expedition"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lagt till behörighet till:"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Transportlistan i Aveny Bisättningsjournal"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Välj lokal och Kortinloggning i WebAveny Aveny Bisättningsjournal"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "3012 - Diarium expedition"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Tagit bort behörighet till styrvärden i Diariet"
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12290",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12290",
    "key": "KF-336",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>I vanvårdsrutinen i WebGrav visas hinten \"Lägg till anordning\" på knappen <b>Lägg till</b> och \"Lägg till anordning\" på knappen <b>Godkänd</b>.</p>\n\n\n\n<p><b>Att göra:</b> Ändra hinten på knapparna Lägg till och Godkänd i vanvårdsrutinen så de stämmer överens med sin aktuella funktionalitet.</p>\n\n<p>Lägg till → Lägg till vanvårdsmarkering</p>\n\n<p>Godkänd → Godkänd vanvårdsbesiktning</p>",
      "customfield_10034": "Fel hint p&#xE5; vanv&#xE5;rd",
      "customfield_10035": "En felaktig hint visades p&#xE5; knapparna L&#xE4;gg till och Godk&#xE4;nd i vanv&#xE5;rsrutinen i WebAveny. Det &#xE4;r nu r&#xE4;ttat.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Vanvårdsrutinen i Webaveny- visar fel hint när man trycker på lägg till",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10012",
          "id": "10012",
          "name": "Grav"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "I vanvårdsrutinen i WebGrav visas hinten \"Lägg till anordning\" på knappen "
              },
              {
                "type": "text",
                "text": "Lägg till",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "text",
                "text": " och \"Lägg till anordning\" på knappen "
              },
              {
                "type": "text",
                "text": "Godkänd",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "text",
                "text": "."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Att göra: ",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "text",
                "text": "Ändra hinten på knapparna Lägg till och Godkänd i vanvårdsrutinen så de stämmer överens med sin aktuella funktionalitet."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lägg till → Lägg till vanvårdsmarkering"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Godkänd → Godkänd vanvårdsbesiktning"
              }
            ]
          }
        ]
      },
      "customfield_10034": "Fel hint på vanvård",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "En felaktig hint visades på knapparna Lägg till och Godkänd i vanvårsrutinen i WebAveny. Det är nu rättat."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12203",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12203",
    "key": "KF-309",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Man kan ta bort en journal (KJ, BJ) trots att tvist föreligger.<br/>\nFinns dubletter om man senare skapar journalen på nytt och markerar för tvist, </p>",
      "customfield_10034": "Ta bort en journal vid tvist",
      "customfield_10035": "Det gick tidigare att ta bort en journal i bis&#xE4;ttningen och kremation d&#xE4;r det f&#xF6;rel&#xE5;g tvist. Det g&#xE5;r inte l&#xE4;ngre utan du f&#xE5;r ist&#xE4;llet ett meddelande att detta inte &#xE4;r m&#xF6;jligt.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Tillåt inte borttag om tvist finns",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10016",
          "id": "10016",
          "name": "Bisättningsjournal"
        },
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        },
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10017",
          "id": "10017",
          "name": "Kremationsjournal"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Man kan ta bort en journal (KJ, BJ) trots att tvist föreligger."
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Finns dubletter om man senare skapar journalen på nytt och markerar för tvist, "
              }
            ]
          }
        ]
      },
      "customfield_10034": "Ta bort en journal vid tvist",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Det gick tidigare att ta bort en journal i bisättningen och kremation där det förelåg tvist. Det går inte längre utan du får istället ett meddelande att detta inte är möjligt."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12036",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12036",
    "key": "KF-248",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Beskrivning:</b><br/>\nNär funktionen \"Slå samman organisationer\" ska användas i rutin \"Organisationer\" uppstår ett felmeddelande. </p>\n\n<p><span class=\"image-wrap\" style=\"\"><img src=\"/secure/attachment/10354/10354_image-2019-06-14-15-30-06-465.png\" height=\"183\" width=\"200\" style=\"border: 0px solid black\" /></span></p>\n\n\n\n<p>Logg enligt följande: <br/>\n2784 20190614 103434: EMSSQLNativeException[00D4AF42] i Organisationer; [FireDAC][Phys][ODBC][Microsoft][ODBC SQL Server Driver][SQL Server]Invalid column name 'BegrByra'.<br/>\n2784 20190614 103434: EDGUIError[00A2E359] i Organisationer (raised by TEDDataManager.IOpenCursor in EDDataManager); Cannot open data set: [FireDAC][Phys][ODBC][Microsoft][ODBC SQL Server Driver][SQL Server]Invalid column name 'BegrByra'.</p>\n\n<p>OBS synka med Ekonomi - slå samman kunder?</p>",
      "customfield_10034": "Fel vid sammanslagning av organisationer",
      "customfield_10035": "Om du f&#xF6;rs&#xF6;kte sl&#xE5; samman organisationer fick du ett fel. Det har vi nu r&#xE4;ttat.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Rätta \"slå samman organisationer\" (grundsystem)",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10031",
          "id": "10031",
          "name": "Grundsystem"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Beskrivning:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "När funktionen \"Slå samman organisationer\" ska användas i rutin \"Organisationer\" uppstår ett felmeddelande. "
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "ddaa62ca-b802-4f8e-8830-28570dfd5393",
                  "type": "file",
                  "collection": "jira-12036-field-description",
                  "width": 200,
                  "height": 183
                }
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": " "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Logg enligt följande: "
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "2784 20190614 103434: EMSSQLNativeException[00D4AF42] i Organisationer; [FireDAC][Phys][ODBC][Microsoft][ODBC SQL Server Driver][SQL Server]Invalid column name 'BegrByra'."
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "2784 20190614 103434: EDGUIError[00A2E359] i Organisationer (raised by TEDDataManager.IOpenCursor in EDDataManager); Cannot open data set: [FireDAC][Phys][ODBC][Microsoft][ODBC SQL Server Driver][SQL Server]Invalid column name 'BegrByra'."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OBS synka med Ekonomi - slå samman kunder?"
              }
            ]
          }
        ]
      },
      "customfield_10034": "Fel vid sammanslagning av organisationer",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Om du försökte slå samman organisationer fick du ett fel. Det har vi nu rättat."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12006",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12006",
    "key": "KF-230",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Beskrivning:</b><br/>\nOm en faktura blivit makulerad/krediterad/betald i Ekonomi-systemet visas inte detta i Bokning.</p>\n\n<p>Status på fakturan</p>\n\n<p><b>Att göra:</b><br/>\nAnge i anslutning till fakturanumret att fakturan är makulerad/krediterad/betald, om så är fallet. Ange informationen inom parentes direkt efter fakturanumret. Typ <font color=\"#59afe1\">Fakturanr: 445321 (makulerad).</font></p>",
      "customfield_10034": "Information i bokning om faktura &#xE4;r betald",
      "customfield_10035": "Det visas nu information p&#xE5; aktiviteten om en faktura &#xE4;r ej betald, betald, krediterad eller makulerad.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Informera/visa om faktura är makulerad ",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Beskrivning:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Om en faktura blivit makulerad/krediterad/betald i Ekonomi-systemet visas inte detta i Bokning."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Status på fakturan"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Att göra:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Ange i anslutning till fakturanumret att fakturan är makulerad/krediterad/betald, om så är fallet. Ange informationen inom parentes direkt efter fakturanumret. Typ "
              },
              {
                "type": "text",
                "text": "Fakturanr: 445321 (makulerad).",
                "marks": [
                  {
                    "type": "textColor",
                    "attrs": {
                      "color": "#59afe1"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "customfield_10034": "Information i bokning om faktura är betald",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Det visas nu information på aktiviteten om en faktura är ej betald, betald, krediterad eller makulerad."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "11797",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/11797",
    "key": "KF-151",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Beskrivning:</b><br/>\nOm förändring sker vad gäller schemat i FLEX som påverkar redan gjorda bokningar i Aveny behöver användarna i Aveny Bokning bli varse om förändringen för att kunna åtgärda bokningarna. </p>\n\n<p><b>Att göra:</b><br/>\nMeddela användarna av Aveny Bokning att förändringar skett i FLEX genom en pop-up notis (samt eventuellt ett standardurval om optionen är påslagen?).</p>\n\n<p>Förslag på namn på urvalet = “Frånvaro i FLEX”.</p>\n\n<p>När användaren väljer att klicka på pop-upen eller aktivera urvalet ska rutin \"Aktiviteter\" öppnas och lista bokningar (3 mån framåt) där en eller flera resurser har en bokningstid som överlappar resursens ledighet i flex. </p>\n\n<p>3P - SQL villkor</p>\n\n\n",
      "customfield_10034": "Uppm&#xE4;rksamma f&#xF6;r&#xE4;ndringar i FLEX som p&#xE5;verkar bokningar i Aveny",
      "customfield_10035": "N&#xE4;r integrationen mellan Aveny och FLEX aktiveras kontrollerar Aveny Bokning redan gjorda bokningar mot fr&#xE5;nvaro registrerad i FLEX f&#xF6;r att kunna uppm&#xE4;rksamma anv&#xE4;ndaren om att vissa resurser som bokats p&#xE5; aktiviteter kanske &#xE4;r fr&#xE5;nvarande. <br/>\n<br/>\nFunktionen pilottestas och finns &#xE4;nnu inte tillg&#xE4;nglig. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Uppmärksamma förändringar i FLEX som påverkar bokningar i Aveny",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Beskrivning:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Om förändring sker vad gäller schemat i FLEX som påverkar redan gjorda bokningar i Aveny behöver användarna i Aveny Bokning bli varse om förändringen för att kunna åtgärda bokningarna. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Att göra:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Meddela användarna av Aveny Bokning att förändringar skett i FLEX genom en pop-up notis (samt eventuellt ett standardurval om optionen är påslagen?)."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Förslag på namn på urvalet = “Frånvaro i FLEX”."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "När användaren väljer att klicka på pop-upen eller aktivera urvalet ska rutin \"Aktiviteter\" öppnas och lista bokningar (3 mån framåt) där en eller flera resurser har en bokningstid som överlappar resursens ledighet i flex. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "3P - SQL villkor"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "paragraph",
            "content": []
          }
        ]
      },
      "customfield_10034": "Uppmärksamma förändringar i FLEX som påverkar bokningar i Aveny",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "När integrationen mellan Aveny och FLEX aktiveras kontrollerar Aveny Bokning redan gjorda bokningar mot frånvaro registrerad i FLEX för att kunna uppmärksamma användaren om att vissa resurser som bokats på aktiviteter kanske är frånvarande. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Funktionen pilottestas och finns ännu inte tillgänglig. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "11783",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/11783",
    "key": "KF-140",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Beskrivning:</b><br/>\nFör att Aveny ska kunna hämta frånvaro kopplat till en specifik resurs inlagd i Aveny behöver anställd i FLEX matchas med resurs i Aveny. Detta görs mha. fältet epost. OBS, gäller endast personresurser.</p>\n\n<p>Lägg till ett fält/label i resurser för FLEX-ID (Anställningsnummer).</p>\n\n\n<p>Matchning ska försöka göras med automatik genom mailadressen, om detta inte fungerar ska man matchningen kunna köras om via admin-funktion. </p>\n\n<p>När optionen slås på ska också en matchning mellan resurser i Aveny och Anställda i FLEX göras. Matchningen får gärna ske automatiskt baserat på angiven e-postadress. Därför är det bäst att göra matchningen i Användar-registret..? Problemet är att alla som schemaläggs i FLEX förmodligen inte är användare i Aveny.. därför rimligare att matcha på Resurs-nivå men där finns inte alltid e-postadressen registrerad.</p>\n\n\n\n<p>Kolla i första hand på användaren i rutin “Resurser“, i andra hand på resursen i rutin “Resurser“. </p>",
      "customfield_10034": "Matcha resurser i Aveny med anst&#xE4;llda i FLEX",
      "customfield_10035": "N&#xE4;r integrationen mellan Aveny och FLEX aktiveras g&#xF6;r Aveny en automatisk matchning mellan resurser i Aveny och anst&#xE4;llda i FLEX. <br/>\n<br/>\nFunktionen pilottestas och finns inte tillg&#xE4;nglig &#xE4;nnu.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Matcha resurser i Aveny med anställda i FLEX",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10013",
          "id": "10013",
          "name": "Bokning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Beskrivning:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "För att Aveny ska kunna hämta frånvaro kopplat till en specifik resurs inlagd i Aveny behöver anställd i FLEX matchas med resurs i Aveny. Detta görs mha. fältet epost. OBS, gäller endast personresurser."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lägg till ett fält/label i resurser för FLEX-ID (Anställningsnummer)."
              },
              {
                "type": "hardBreak"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Matchning ska försöka göras med automatik genom mailadressen, om detta inte fungerar ska man matchningen kunna köras om via admin-funktion. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "När optionen slås på ska också en matchning mellan resurser i Aveny och Anställda i FLEX göras. Matchningen får gärna ske automatiskt baserat på angiven e-postadress. Därför är det bäst att göra matchningen i Användar-registret..? Problemet är att alla som schemaläggs i FLEX förmodligen inte är användare i Aveny.. därför rimligare att matcha på Resurs-nivå men där finns inte alltid e-postadressen registrerad."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Kolla i första hand på användaren i rutin “Resurser“, i andra hand på resursen i rutin “Resurser“. "
              }
            ]
          }
        ]
      },
      "customfield_10034": "Matcha resurser i Aveny med anställda i FLEX",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "När integrationen mellan Aveny och FLEX aktiveras gör Aveny en automatisk matchning mellan resurser i Aveny och anställda i FLEX. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Funktionen pilottestas och finns inte tillgänglig ännu."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12273",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12273",
    "key": "GR-282",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Gå igenom vilka paket som är \"outdated\" uppdatera det som är enkelt</p>\n\n<p>Om något paket har släppt en uppdatering som kräver större ändring så lägger vi en separat uppgift för det i backloggen</p>\n\n<p>Om prettier uppdaterats så kör: yarn run prettier</p>\n\n<p>Notera om någon uppdatering innehåller något särskilt som behöver informeras om. Lägg en kommentar på uppgiften med \"mention\" till programmarna (+ ev. andra).</p>\n\n<p>Kopiera den här uppgiften till backloggen och ändra benämningen till nästa månad</p>",
      "customfield_10034": "Uppdatera dependencies",
      "customfield_10035": "Har uppdaterat dependencies.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Uppdatera dependencies (Januari)",
      "components": [],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Gå igenom vilka paket som är \"outdated\" uppdatera det som är enkelt"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Om något paket har släppt en uppdatering som kräver större ändring så lägger vi en separat uppgift för det i backloggen"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Om prettier uppdaterats så kör: yarn run prettier"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Notera om någon uppdatering innehåller något särskilt som behöver informeras om. Lägg en kommentar på uppgiften med \"mention\" till programmarna (+ ev. andra)."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Kopiera den här uppgiften till backloggen och ändra benämningen till nästa månad"
              }
            ]
          }
        ]
      },
      "customfield_10034": "Uppdatera dependencies",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Har uppdaterat dependencies."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "13181",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/13181",
    "key": "EK-708",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p> <span class=\"image-wrap\" style=\"\"><a id=\"11142_thumb\" href=\"/secure/attachment/11142/11142_image-2019-11-06-10-49-33-220.png\" title=\"image-2019-11-06-10-49-33-220.png\" file-preview-type=\"image\" file-preview-id=\"11142\" file-preview-title=\"image-2019-11-06-10-49-33-220.png\"><jira-attachment-thumbnail url=\"https://eniacdata.atlassian.net/secure/thumbnail/11142/image-2019-11-06-10-49-33-220.png?default=false\" jira-url=\"https://eniacdata.atlassian.net/secure/thumbnail/11142/image-2019-11-06-10-49-33-220.png\" filename=\"image-2019-11-06-10-49-33-220.png\"><img src=\"https://eniacdata.atlassian.net/secure/thumbnail/11142/image-2019-11-06-10-49-33-220.png\" data-attachment-name=\"image-2019-11-06-10-49-33-220.png\" data-attachment-type=\"thumbnail\" data-media-services-id=\"a1794e55-fa15-472b-b635-1b07004f3442\" data-media-services-type=\"file\" style=\"border: 0px solid black\" /></jira-attachment-thumbnail></a></span> </p>",
      "customfield_10034": "Bokf&#xF6;ringsfil fr&#xE5;n KOB",
      "customfield_10035": "Aveny har sedan tidigare en l&#xF6;sning f&#xF6;r att hantera fl&#xF6;det av inomkyrkliga kund- och leverant&#xF6;rsfakturor som g&#xE5;r via KOB, Svenska Kyrkans Kollekt och Betalsystem.<br/>\n<br/>\nD&#xE4;remot har det varit en manuell hantering av den netting som genomf&#xF6;rs en g&#xE5;ng i m&#xE5;naden. En rapport med en specifikation &#xF6;ver hur mycket som har  in- och utbetalats f&#xF6;r kollekter, kyrkoavgiften, KAE osv. har skrivits ut f&#xF6;r att sedan manuellt bokf&#xF6;ras i Aveny. Nu finns ett programst&#xF6;d f&#xF6;r den h&#xE4;r hanteringen. Programst&#xF6;det best&#xE5;r av en ny rutin Bokf&#xF6;ringsfil fr&#xE5;n KOB och ett nytt styrv&#xE4;rde KOB transaktionstyper under delprogram Ekonomi. <br/>\n<br/>\nKOB skapar en bokf&#xF6;ringsfil som Aveny l&#xE4;ser in i den nya rutinen Bokf&#xF6;ringsfil fr&#xE5;n KOB. Via den nya rutinen skapas en bokf&#xF6;ringsorder. De h&#xE4;r stegen sker p&#xE5; automatik. Hanteringen av filen sker i rutin Bokf&#xF6;ringsorder. H&#xE4;r finns bl.a. m&#xF6;jlighet att bifoga ett underlag, tex KOB-rapport som ni idag utg&#xE5;r ifr&#xE5;n vid bokf&#xF6;ring, och det finns en inbyggd funktion som m&#xF6;jligg&#xF6;r attest. Attestfunktionen &#xE4;r valbar och har ni valt att arbeta med den utf&#xF6;rs attesten i Webaveny. <br/>\n<br/>\nI rutin Bokf&#xF6;ringsorder skapas en verifikation som sedan definitivbokf&#xF6;rs i Rutin Bokf&#xF6;ringsjournal.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Lägg till rutor med totalbelopp för debit och kredit i bokföringsorder",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10020",
          "id": "10020",
          "name": "Ekonomi"
        },
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10037",
          "id": "10037",
          "name": "Nya Aveny",
          "description": "Markeras på ärende som levereras på plattformen Nya Aveny"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "a1794e55-fa15-472b-b635-1b07004f3442",
                  "type": "file",
                  "collection": "jira-13181-field-description",
                  "width": 200,
                  "height": 183
                }
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": " "
              }
            ]
          }
        ]
      },
      "customfield_10034": "Bokföringsfil från KOB",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Aveny har sedan tidigare en lösning för att hantera flödet av inomkyrkliga kund- och leverantörsfakturor som går via KOB, Svenska Kyrkans Kollekt och Betalsystem."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Däremot har det varit en manuell hantering av den netting som genomförs en gång i månaden. En rapport med en specifikation över hur mycket som har  in- och utbetalats för kollekter, kyrkoavgiften, KAE osv. har skrivits ut för att sedan manuellt bokföras i Aveny. Nu finns ett programstöd för den här hanteringen. Programstödet består av en ny rutin Bokföringsfil från KOB och ett nytt styrvärde KOB transaktionstyper under delprogram Ekonomi. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "KOB skapar en bokföringsfil som Aveny läser in i den nya rutinen Bokföringsfil från KOB. Via den nya rutinen skapas en bokföringsorder. De här stegen sker på automatik. Hanteringen av filen sker i rutin Bokföringsorder. Här finns bl.a. möjlighet att bifoga ett underlag, tex KOB-rapport som ni idag utgår ifrån vid bokföring, och det finns en inbyggd funktion som möjliggör attest. Attestfunktionen är valbar och har ni valt att arbeta med den utförs attesten i Webaveny. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "I rutin Bokföringsorder skapas en verifikation som sedan definitivbokförs i Rutin Bokföringsjournal."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12697",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12697",
    "key": "EK-528",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Komplettera kundrutinen med en kontroll i fältet GLN-nummer så att korrekt format registreras. Detta ska göras för att felaktig kundfaktura ska stoppas direkt så att den inte behöver gå hela vägen till fakturaväxeln innan den stoppas.</p>\n\n\n<p>Förslag på lösning från Solution:</p>\n\n<p>Det vore ju bra om ni kör ”ValidateGLN” redan när dom skriver in GLN nummer för att på så sätt få fel när dom skriver in Peppolid.<br/>\nI felmeddelandet där skulle ni då kunna lägga in något liknande detta ”Detta GLN-nummer går ej att validera pga <span class=\"error\">&#91;texten från ValidateGLN vid fel&#93;</span> Kom ihåg att det inte är PeppolID utan numret för svefaktura via VAN-leverantör som gäller”</p>\n\n<p>Vänliga hälsningar/Yours sincerely,<br/>\nJohan Ahlberg<br/>\nSolution Xperts - Systemutvecklare<br/>\nMobile +46 733 172939</p>",
      "customfield_10034": "E-faktura f&#xF6;retag",
      "customfield_10035": "Nu g&#xF6;rs en kontroll i Aveny att GLN-numret som skrivs in &#xE4;r i korrekt format. GLN-nummer anger organisationskundens identitet.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "E-faktura företag - kontroll på värde i fältet GLN-nummer",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10022",
          "id": "10022",
          "name": "Order/Fakturering"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Komplettera kundrutinen med en kontroll i fältet GLN-nummer så att korrekt format registreras. Detta ska göras för att felaktig kundfaktura ska stoppas direkt så att den inte behöver gå hela vägen till fakturaväxeln innan den stoppas."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Förslag på lösning från Solution:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Det vore ju bra om ni kör ”ValidateGLN” redan när dom skriver in GLN nummer för att på så sätt få fel när dom skriver in Peppolid."
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "I felmeddelandet där skulle ni då kunna lägga in något liknande detta ”Detta GLN-nummer går ej att validera pga [texten från ValidateGLN vid fel] Kom ihåg att det inte är PeppolID utan numret för svefaktura via VAN-leverantör som gäller”"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vänliga hälsningar/Yours sincerely,"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Johan Ahlberg"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Solution Xperts - Systemutvecklare"
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Mobile +46 733 172939"
              }
            ]
          }
        ]
      },
      "customfield_10034": "E-faktura företag",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Nu görs en kontroll i Aveny att GLN-numret som skrivs in är i korrekt format. GLN-nummer anger organisationskundens identitet."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12575",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12575",
    "key": "EK-474",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Bakgrund</b><br/>\nNordea hanterar ”mjukt OCR” som ett riktigt OCR-nummer och kräver en korrekt kontrollsiffra, vilket i praktiken kan ses som att man inte kan skicka mjukt OCR till Nordea. Har enheten mjuk OCR kontroll fungerar e-faktura privat inte via Nordea. </p>\n\n<p><b>Problem</b><br/>\nVi har gjort en temporär lösning där oavsett om enheten har mjuk/hård OCR kontroll blir distributionssättet \"central utskrift\" på de fakturor hos kunder som har anmält sig till e-faktura privat via Nordea. </p>\n\n<p><b>Lösning</b> <br/>\nLägga in en kontroll som tittar på vad enheten har för OCR-avtal. I styrvärde Utbetalningssätt markeras om enheten har mjuk eller hård OCR kontroll. Om enheten har hård kontroll markerad borde vi låta de kunna skicka fakturor med distributionssätt \"e-faktura privat\". Detta gäller även för mjuk kontroll om kunden bockat i “Skapa alla fakturanummer som OCR-nummer” på Faktureringsfliken under Systeminställningar.</p>",
      "customfield_10034": "E-faktura till Nordea-kunder",
      "customfield_10035": "E-fakturor har tidigare inte kunnat tas emot av privatkunder hos Nordea pga Nordeas OCR-hantering. Nu tas E-fakturor emot s&#xE5; l&#xE4;nge enheten antingen har h&#xE5;rd sp&#xE4;rr p&#xE5; sitt inbetalningskonto och/eller har OCR-nummer som fakturanummer. Till &#xF6;vriga banker kan E-faktura privat skickas oavsett OCR-inst&#xE4;llningar, precis som tidigare.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Kunder som anmäler sig till e-faktura privat via Nordea får ej fakturorna elektroniskt oavsett hård/mjuk OCR",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10023",
          "id": "10023",
          "name": "Kundreskontra"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Bakgrund",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Nordea hanterar ”mjukt OCR” som ett riktigt OCR-nummer och kräver en korrekt kontrollsiffra, vilket i praktiken kan ses som att man inte kan skicka mjukt OCR till Nordea. Har enheten mjuk OCR kontroll fungerar e-faktura privat inte via Nordea. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Problem",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Vi har gjort en temporär lösning där oavsett om enheten har mjuk/hård OCR kontroll blir distributionssättet \"central utskrift\" på de fakturor hos kunder som har anmält sig till e-faktura privat via Nordea. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lösning",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "text",
                "text": " "
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "Lägga in en kontroll som tittar på vad enheten har för OCR-avtal. I styrvärde Utbetalningssätt markeras om enheten har mjuk eller hård OCR kontroll. Om enheten har hård kontroll markerad borde vi låta de kunna skicka fakturor med distributionssätt \"e-faktura privat\". Detta gäller även för mjuk kontroll om kunden bockat i “Skapa alla fakturanummer som OCR-nummer” på Faktureringsfliken under Systeminställningar."
              }
            ]
          }
        ]
      },
      "customfield_10034": "E-faktura till Nordea-kunder",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "E-fakturor har tidigare inte kunnat tas emot av privatkunder hos Nordea pga Nordeas OCR-hantering. Nu tas E-fakturor emot så länge enheten antingen har hård spärr på sitt inbetalningskonto och/eller har OCR-nummer som fakturanummer. Till övriga banker kan E-faktura privat skickas oavsett OCR-inställningar, precis som tidigare."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12397",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12397",
    "key": "EK-388",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Bakgrund:</b></p>\n\n<p>Fel som upptäcktes i samband med att jag hjälpte kund att lägga in bidrag till investeringar som ej registrerats korrekt från GAS-in. Bidrag som regsitreras på en Överförd Sammanslagen investering visas inte i rapport Årsredovisningsnot anl tillg. Se exempel i Tierps anl reg, anl nr B0005 och B0006. </p>\n\n<p><b>För att återskapa felet hos oss</b></p>\n\n<ul>\n\t<li>Välj ut ex anl nr B00001</li>\n\t<li>Makulera avskrivningar för 2019</li>\n\t<li>Kör i debaug-läge (kunderna kunde endast nå funktionen i K3-läge)</li>\n\t<li>Högerklicka och välj Överför inv till ny sammanslagen inv</li>\n\t<li>Välj datum 190101</li>\n\t<li>Lägg in bidrag i fält bidrag</li>\n\t<li>Starta rutin Investeringar och sök på anl nr B0001</li>\n\t<li>Notera att bidraget inte visas i rapporten</li>\n</ul>\n\n\n<p><span class=\"image-wrap\" style=\"\"><img src=\"/secure/attachment/10622/10622_image-20190829-090945.png\" height=\"654\" width=\"1239\" style=\"border: 0px solid black\" /></span></p>\n\n<p><b>Lösningsförslag.</b> Programmet ska hantera bidraget på den överförda investeringen precis som för ing inv och normala inv. </p>\n\n<p>OBS&#33; Ändringarna ligger i branchen för EK270 eftersom den uppgiften också handlar om Årsredovisningsnoten och bidrag. </p>\n\n<p>Testa alltå här:</p>\n\n<p>N:\\\\exe\\\\temp\\\\testprogram\\\\EK270\\\\aveny<br class=\"atl-forced-newline\" />AvenyMain.exe</p>\n\n<p><b>Acceptanskriterier:</b></p>\n\n<ul>\n\t<li>Kör <b>Aveny Distr</b> och logga in i en utbildningsdatabas (ej GAS) och återställ databasen</li>\n\t<li>Gör punkterna enligt beskrinvning för att återskapa felet ovan</li>\n\t<li>Gå in i rutin Investeringar, per månad = 2019-12 och gör urval på B0001</li>\n\t<li>Ta ut rapporten “Årsredoviisningsnot anläggningstillgångar” och konstatera att inte bidragsdelen kommer mer</li>\n\t<li>Kör <b>det rättade programmet</b></li>\n\t<li>Gå in i rutin Investeringar, per månad = 2019-12 och gör urval på B0001</li>\n\t<li>Ta ut rapporten “Årsredoviisningsnot anläggningstillgångar”. Kontrollera att bidragsdelen kommer med på raderna:\n\t<ul>\n\t\t<li>“Anskaffningsvärde före avdrag för bidrag, Ingående anskaffningsvärde”</li>\n\t\t<li>“Anskaffningsvärde före avdrag för bidrag, Utgående anskaffningsvärde”</li>\n\t\t<li>“Bidrag, Ingående anskaffningsvärde”</li>\n\t\t<li>“Bidrag, Utgående anskaffningsvärde”</li>\n\t</ul>\n\t</li>\n\t<li>Ta ut “Årsredovisningsnot anläggningstillgångar” för alla anläggningstillgångar i både <b>distr</b> och <b>det rättade programmet</b> och jämför så att inget annat ändrats</li>\n</ul>\n\n",
      "customfield_10034": "Rapport &#xC5;rsredovisning anl&#xE4;ggningstillg&#xE5;ngar visade inte bidra p&#xE5; Sammanslagna investeringar ",
      "customfield_10035": "Bidrag som registrerats p&#xE5; Sammanslagna investeringar visades inte i rapport &#xC5;rsredovisningsnot anl&#xE4;ggningstillg&#xE5;ngar. Felet &#xE4;r nu r&#xE4;ttat och bidrag p&#xE5; sammanslagna investeringar visas som som ing&#xE5;ende bidrag i rapporten. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Rapport Årsredovisningsnot anl tillg visar inte bidrag från Överförda sammanslagna investeringar ",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10018",
          "id": "10018",
          "name": "Anläggningsredovisning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Bakgrund:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Fel som upptäcktes i samband med att jag hjälpte kund att lägga in bidrag till investeringar som ej registrerats korrekt från GAS-in. Bidrag som regsitreras på en Överförd Sammanslagen investering visas inte i rapport Årsredovisningsnot anl tillg. Se exempel i Tierps anl reg, anl nr B0005 och B0006. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "För att återskapa felet hos oss",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Välj ut ex anl nr B00001"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Makulera avskrivningar för 2019"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Kör i debaug-läge (kunderna kunde endast nå funktionen i K3-läge) "
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Högerklicka och välj Överför inv till ny sammanslagen inv"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Välj datum 190101"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Lägg in bidrag i fält bidrag"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Starta rutin Investeringar och sök på anl nr B0001"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Notera att bidraget inte visas i rapporten"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "80bc18d7-ba13-46c7-ad5f-40cfa7beb0ab",
                  "type": "file",
                  "collection": "jira-12397-field-description",
                  "width": 1239,
                  "height": 654
                }
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lösningsförslag.",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "text",
                "text": " Programmet ska hantera bidraget på den överförda investeringen precis som för ing inv och normala inv. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "OBS! Ändringarna ligger i branchen för EK270 eftersom den uppgiften också handlar om Årsredovisningsnoten och bidrag. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Testa alltå här:"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "N:\\exe\\temp\\testprogram\\EK270\\aveny\\AvenyMain.exe"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Acceptanskriterier:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Kör "
                      },
                      {
                        "type": "text",
                        "text": "Aveny Distr ",
                        "marks": [
                          {
                            "type": "strong"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "text": "och logga in i en utbildningsdatabas (ej GAS) och återställ databasen"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Gör punkterna enligt beskrinvning för att återskapa felet ovan"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Gå in i rutin Investeringar, per månad = 2019-12 och gör urval på B0001"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Ta ut rapporten “Årsredoviisningsnot anläggningstillgångar” och konstatera att inte bidragsdelen kommer mer"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Kör "
                      },
                      {
                        "type": "text",
                        "text": "det rättade programmet",
                        "marks": [
                          {
                            "type": "strong"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Gå in i rutin Investeringar, per månad = 2019-12 och gör urval på B0001"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Ta ut rapporten “Årsredoviisningsnot anläggningstillgångar”. Kontrollera att bidragsdelen kommer med på raderna:"
                      }
                    ]
                  },
                  {
                    "type": "bulletList",
                    "content": [
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "“Anskaffningsvärde före avdrag för bidrag, Ingående anskaffningsvärde”"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "“Anskaffningsvärde före avdrag för bidrag, Utgående anskaffningsvärde”"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "“Bidrag, Ingående anskaffningsvärde”"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "“Bidrag, Utgående anskaffningsvärde”"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Ta ut “Årsredovisningsnot anläggningstillgångar” för alla anläggningstillgångar i både "
                      },
                      {
                        "type": "text",
                        "text": "distr",
                        "marks": [
                          {
                            "type": "strong"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "text": " och "
                      },
                      {
                        "type": "text",
                        "text": "det rättade programmet",
                        "marks": [
                          {
                            "type": "strong"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "text": " och jämför så att inget annat ändrats"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          }
        ]
      },
      "customfield_10034": "Rapport Årsredovisning anläggningstillgångar visade inte bidra på Sammanslagna investeringar ",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Bidrag som registrerats på Sammanslagna investeringar visades inte i rapport Årsredovisningsnot anläggningstillgångar. Felet är nu rättat och bidrag på sammanslagna investeringar visas som som ingående bidrag i rapporten. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12295",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12295",
    "key": "EK-338",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>KS ärende från Malmö: De har justerat kostnadsställe på alla anläggningstillgångar som konterats mot 402. I avskrivningen för juni omfördes årets avskrivningarna som bokförts mot 402. De avslutade därefter kostnadsställe 402 per 190631. När de beräknade avskrivningar för juli fick de nedan felmeddelande, trots att alla avskrivningar bokförda mot kostnadsställe 402 redan var omförda. </p>\n\n\n\n<p><b>Acceptanskriterier (by example):</b> </p>\n\n<ul>\n\t<li>Logga in som “ekonom” och återställ en utbildningsdatabas (ej GAS)</li>\n\t<li>I utbildningsdatabaser är avskrivningar och internränta bokförda för alla anläggningar t o m period 2019-01</li>\n\t<li>Ändra avskrivning- och internräntekonto (debet) för anläggning I0009 från <del>1700-060</del>-- till <del>1500-060</del>--</li>\n\t<li>Bokför avskrivningar för 2019-01. Då bokföras avskrivningen om för I0009 från  1700 till 1500</li>\n\t<li>Bokför internränta för 2019-01. Då bokföras internräntan om för I0009 från  1700 till 1500</li>\n\t<li>Gå in i rutin Verksamhet och avsluta verksamhet 1700 per 2019-08-31. Spara - då får meddelandet om att 1700 finns på arbetsbudget. För att komma förbi detta - gå in i rutin Arbetsbudget och ta bort arbetsbudgeten för 2020. Gå därefter tillbaka till rutin Verksamhet och spara att du avslutar per 2019-08-31.</li>\n\t<li>Gå in i rutin Bokför avskrivningar och bokför avskrivningar per 2019-09. Eftersom programmet redovisar 0 på 1700 för I0009 så ska det gå att beräkna och bokföra avskrivningar.</li>\n\t<li>Gå in i rutin Bokför internränta och bokför internränta per 2019-09. Eftersom programmet redovisar 0 på 1700 för I0009 så ska det gå att beräkna och bokföra internränta.</li>\n\t<li>Som en extra avstämning - kör Bokför avskrivningar på en godtycklig databas (gärna en kundkopia) dels med det nya programmet och dels med distr och säkerställ att denna ändring inte har förstört något annat. Allt ska vara likadant.</li>\n\t<li>Som en extra avstämning - kör Bokför internränta på en godtycklig databas (gärna en kundkopia) dels med det nya programmet och dels med distr och säkerställ att denna ändring inte har förstört något annat. Allt ska vara likadant.</li>\n</ul>\n\n\n<p>N:\\\\temp\\\\testprogram\\\\EK338\\\\aveny<br class=\"atl-forced-newline\" />AvenyMain.exe</p>\n\n<p>Jag har testat och får samma fel i Distr. Felet gäller sannolikt även bokför internränta. Ett likande fel är rättat som gäller justerade kombinationsvillkor, se uppgift 10994 och 11071. </p>\n\n<p><span class=\"image-wrap\" style=\"\"><img src=\"/secure/attachment/10532/10532_image-2019-08-13-09-11-07-377.png\" height=\"183\" width=\"200\" style=\"border: 0px solid black\" /></span></p>\n\n",
      "customfield_10034": "Felmeddelande vid ber&#xE4;kning av avskrivningar n&#xE4;r en koddel avslutats i tidigare period",
      "customfield_10035": "Ett fel har gjort att ett felmeddelande har genererats vid ber&#xE4;kning av avskrivningar n&#xE4;r en koddel avslutats trots att det inte finns n&#xE5;gra poster att omf&#xF6;ra. Felet &#xE4;r nu r&#xE4;ttat och avskrivningar kan nu ber&#xE4;knas och bokf&#xF6;ras &#xE4;ven om koddelar avslutats och &#xE4;ndrats i tidigare perioder.  ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Felmeddelande vid beräkning av avskrivningar när en koddel avslutats trots att det inte finns något att omföra ",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10018",
          "id": "10018",
          "name": "Anläggningsredovisning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "KS ärende från Malmö: De har justerat kostnadsställe på alla anläggningstillgångar som konterats mot 402. I avskrivningen för juni omfördes årets avskrivningarna som bokförts mot 402. De avslutade därefter kostnadsställe 402 per 190631. När de beräknade avskrivningar för juli fick de nedan felmeddelande, trots att alla avskrivningar bokförda mot kostnadsställe 402 redan var omförda. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Acceptanskriterier (by example):",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "text",
                "text": " "
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Logga in som “ekonom” och återställ en utbildningsdatabas (ej GAS)"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "I utbildningsdatabaser är avskrivningar och internränta bokförda för alla anläggningar t o m period 2019-01"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Ändra avskrivning- och internräntekonto (debet) för anläggning I0009 från -1700-060--- till -1500-060---"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Bokför avskrivningar för 2019-01. Då bokföras avskrivningen om för I0009 från  1700 till 1500"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Bokför internränta för 2019-01. Då bokföras internräntan om för I0009 från  1700 till 1500"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Gå in i rutin Verksamhet och avsluta verksamhet 1700 per 2019-08-31. Spara - då får meddelandet om att 1700 finns på arbetsbudget. För att komma förbi detta - gå in i rutin Arbetsbudget och ta bort arbetsbudgeten för 2020. Gå därefter tillbaka till rutin Verksamhet och spara att du avslutar per 2019-08-31."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Gå in i rutin Bokför avskrivningar och bokför avskrivningar per 2019-09. Eftersom programmet redovisar 0 på 1700 för I0009 så ska det gå att beräkna och bokföra avskrivningar."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Gå in i rutin Bokför internränta och bokför internränta per 2019-09. Eftersom programmet redovisar 0 på 1700 för I0009 så ska det gå att beräkna och bokföra internränta."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Som en extra avstämning - kör Bokför avskrivningar på en godtycklig databas (gärna en kundkopia) dels med det nya programmet och dels med distr och säkerställ att denna ändring inte har förstört något annat. Allt ska vara likadant."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Som en extra avstämning - kör Bokför internränta på en godtycklig databas (gärna en kundkopia) dels med det nya programmet och dels med distr och säkerställ att denna ändring inte har förstört något annat. Allt ska vara likadant."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "N:\\temp\\testprogram\\EK338\\aveny\\AvenyMain.exe"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Jag har testat och får samma fel i Distr. Felet gäller sannolikt även bokför internränta. Ett likande fel är rättat som gäller justerade kombinationsvillkor, se uppgift 10994 och 11071. "
              }
            ]
          },
          {
            "type": "mediaSingle",
            "attrs": {
              "layout": "center"
            },
            "content": [
              {
                "type": "media",
                "attrs": {
                  "id": "a4136a65-b54a-46b2-9fb2-d361d5dc7021",
                  "type": "file",
                  "collection": "jira-12295-field-description",
                  "width": 200,
                  "height": 183
                }
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": " "
              }
            ]
          }
        ]
      },
      "customfield_10034": "Felmeddelande vid beräkning av avskrivningar när en koddel avslutats i tidigare period",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ett fel har gjort att ett felmeddelande har genererats vid beräkning av avskrivningar när en koddel avslutats trots att det inte finns några poster att omföra. Felet är nu rättat och avskrivningar kan nu beräknas och bokföras även om koddelar avslutats och ändrats i tidigare perioder.  "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12207",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12207",
    "key": "EK-294",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Ev. urval som gjorts i rutin Investeringar, innan rapporter tas fram, ska visas på avstämningsrapporterna. Det är viktigt att kunder och revisorer vet vilka anläggningstillgångar som är inkluderade i rapporterna. Det gäller följande rapporter: Sammandrag av årets bokförda händelser, Specifikation av årets bokförda händelser, Specifikation av årets bokförda internränta och Årsredovisningsnot anläggningstillgångar. Om inga urvalsbegränsningar gjort kan det stå något som; Inga urvalsbegränsningar har gjort. </p>\n\n<p>Använd funktionen som finns på Urval för att visa som text.</p>",
      "customfield_10034": "Urval visas p&#xE5; samtliga rapporter i rutin Investeringar ",
      "customfield_10035": "Tidigare var det inte m&#xF6;jligt att se vilket urval som gjorts p&#xE5; rapporterna Sammandrag av &#xE5;rets bokf&#xF6;rda h&#xE4;ndelser, Specifikation av &#xE5;rets bokf&#xF6;rda h&#xE4;ndelser, Specifikation av &#xE5;rets bokf&#xF6;rda internr&#xE4;nta och &#xC5;rsredovisningsnot anl&#xE4;ggningstillg&#xE5;ngar. Urval som g&#xF6;rs innan rapporterna tas fram visas nu l&#xE4;ngst upp p&#xE5; sidhuvudet av rapporten. Har inga urval gjort visas texten; Inga urvalsbegr&#xE4;nsningar. Observera att vid avst&#xE4;mning mellan huvudbok och anl&#xE4;ggningsregister ska ett blank urval g&#xF6;ras, vilket inneb&#xE4;r inga urvalsbegr&#xE4;nsningar. Alla urval som g&#xF6;rs via &#xF6;ppningsurvalet visas p&#xE5; v&#xE4;nster sida av rapporten. Detta g&#xE4;ller f&#xF6;ljande urvalsf&#xE4;lt; anl&#xE4;ggningsnummer, ben&#xE4;mning anl&#xE4;ggningstillg&#xE5;ng, rubrik och ben&#xE4;mning anl&#xE4;ggningskategori. Resterande urval som g&#xF6;rs visas p&#xE5; h&#xF6;ger sida av rapporten.",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Urvalsbegränsningar ska visas på rapporterna ",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10018",
          "id": "10018",
          "name": "Anläggningsredovisning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Ev. urval som gjorts i rutin Investeringar, innan rapporter tas fram, ska visas på avstämningsrapporterna. Det är viktigt att kunder och revisorer vet vilka anläggningstillgångar som är inkluderade i rapporterna. Det gäller följande rapporter: Sammandrag av årets bokförda händelser, Specifikation av årets bokförda händelser, Specifikation av årets bokförda internränta och Årsredovisningsnot anläggningstillgångar. Om inga urvalsbegränsningar gjort kan det stå något som; Inga urvalsbegränsningar har gjort. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Använd funktionen som finns på Urval för att visa som text."
              }
            ]
          }
        ]
      },
      "customfield_10034": "Urval visas på samtliga rapporter i rutin Investeringar ",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Tidigare var det inte möjligt att se vilket urval som gjorts på rapporterna Sammandrag av årets bokförda händelser, Specifikation av årets bokförda händelser, Specifikation av årets bokförda internränta och Årsredovisningsnot anläggningstillgångar. Urval som görs innan rapporterna tas fram visas nu längst upp på sidhuvudet av rapporten. Har inga urval gjort visas texten; Inga urvalsbegränsningar. Observera att vid avstämning mellan huvudbok och anläggningsregister ska ett blank urval göras, vilket innebär inga urvalsbegränsningar. Alla urval som görs via öppningsurvalet visas på vänster sida av rapporten. Detta gäller följande urvalsfält; anläggningsnummer, benämning anläggningstillgång, rubrik och benämning anläggningskategori. Resterande urval som görs visas på höger sida av rapporten."
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "12155",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/12155",
    "key": "EK-270",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p><b>Problembeskrivning:</b></p>\n\n<p>KS ärende från Karin Knutsson i Gislaved. Anl nr B0021 avyttrades under 2018. En av investeringsraderna var markerade med 140 000 kr i bidrag eftersom anskaffningsvärdet reducerats med detta värde. Rapport Årsredovisningsnot visar anskaffningsvärde före avdraget bidrag och därefter bidragsbelopp och nettovärde. Programmet lägger inte till bidragsbeloppet på rad försäljningar och utrangeringar varken för anskaffningsvärdet eller bidraget vilket leder till att utgående anskaffnignsvärde blir 140 000 och utgående ackumulerade bidrag blir - 140 000 kr. Netto anskaffningsvärde blir korrekt men inte bruttovärdena.  </p>\n\n<p><b>Lösning:</b> </p>\n\n<p>När en utrangering eller avyttring görs ska programmet hämta information från fält bidrag inv året oc fält bidrag tidigare år. Bidragssumman ska inte påverka bokföringen. Informationen ska användas när programmet tar fram <em>Årsredovisningsnot anl tillgångar.</em> Bidragsbeloppet ska läggas till i raderna för försäljningar och utrangeringar. I del <em>Anskaffningsvärde</em> före avdraget bidrag läggs det till i minus och i del <em>Bidrag</em> läggs det till i plus. </p>\n\n<p>Se bifogat ex från Gislaved databas </p>\n\n<p>Testprogram här: N:\\\\temp\\\\testprogram\\\\EK270\\\\aveny<br class=\"atl-forced-newline\" />AvenyMain.exe</p>\n\n\n\n<p><b>Acceptanskriterier: (by example - skrivet av Arno - bör stämmas av m Rebecka)</b></p>\n\n<ul>\n\t<li>Kör <b>Aveny Distr</b> mot mot utbildningsmiljön, ej GAS och återställ din utbildningsdatabas</li>\n\t<li>Gå in i rutin Investeringsrader, per månad 2019-12, tabba ur</li>\n\t<li>Knyt investeringsrad med vernr 10015 och belopp 320 000 till en ny investering på befintlig anläggningstillgång I0002 Kompaktrgrävare. Inv.datum 2019-03-01, avskr tid 5 år.</li>\n\t<li>Registrera 10000 kr i fältet “Bidrag inv året” och 20000 kr i fältet “Bidrag tidigare år” på den nya investeringen.</li>\n\t<li>Beräkna och bokför avskrivningar t o m föregående bokf.period (ex 2019-09)</li>\n\t<li>Avyttra hela anläggningstillgången innevarande period (ex 2019-10-01)\n\t<ul>\n\t\t<li>Bokf.datum 191024</li>\n\t\t<li>Försäljn.pris 500 0000</li>\n\t\t<li>Bokför “Intäkt från försäljning” på 3990-1010-900 och “Realisationsvint/förlust” på 3973-1010-900</li>\n\t</ul>\n\t</li>\n\t<li>Gå in i rutinen Investeringar, Per månad “2019-12”, gör ett urval på I0002</li>\n\t<li>Skriv ut “Årsredovisningsnot anläggningstillgångar”\n\t<ul>\n\t\t<li>Se att felet enligt beskrivningen finns, dvs\n\t\t<ul>\n\t\t\t<li>Beloppet på rad “Anskaffningsvärde före avdrag för bidrag, Försäljningar och utrangeringar” innehåller inte bidragssumman på 30 000</li>\n\t\t\t<li>Beloppet på rad “Anskaffningsvärde före avdrag för bidrag, Utgående ackumulerade anskaffningsvärde” innehåller inte bidragssumman på 30 000. Denna rad ska vara summan av ovanstående rader i gruppen “Anskaffningsvärde före avdrag för bidrag” och ska vara 0.</li>\n\t\t\t<li>Belopp saknas på rad “Bidrag, Försäljningar och utrangeringar”</li>\n\t\t\t<li>Beloppet på rad “Bidrag, Utgående ackumulerade bidrag” innehåller inte bidragssumman på 30 000. Denna rad ska vara summan av ovanstående rader i gruppen “Anskaffningsvärde före avdrag för bidrag” och ska vara 0.</li>\n\t\t</ul>\n\t\t</li>\n\t</ul>\n\t</li>\n\t<li>Kör sedan det <b>rättade programmet</b></li>\n\t<li>Gå in i rutinen Investeringar, Per månad “2019-12”, gör ett urval på I0002</li>\n\t<li>Skriv ut “Årsredovisningsnot anläggningstillgångar”\n\t<ul>\n\t\t<li>Se att felet är åtgärdat, dvs\n\t\t<ul>\n\t\t\t<li>Beloppet på rad “Anskaffningsvärde före avdrag för bidrag, Försäljningar och utrangeringar” innehåller bidragssumman på 30 000</li>\n\t\t\t<li>Beloppet på rad “Anskaffningsvärde före avdrag för bidrag, Utgående ackumulerade anskaffningsvärde” innehåller bidragssumman på 30 000. Denna rad ska vara summan av ovanstående rader i gruppen “Anskaffningsvärde före avdrag för bidrag” och ska vara 0.</li>\n\t\t\t<li>Belopp 30 000 finns på rad “Bidrag, Försäljningar och utrangeringar”</li>\n\t\t\t<li>Beloppet på rad “Bidrag, Utgående ackumulerade bidrag” innehåller  bidragssumman på 30 000. Denna rad ska vara summan av ovanstående rader i gruppen “Anskaffningsvärde före avdrag för bidrag” och ska vara 0.</li>\n\t\t</ul>\n\t\t</li>\n\t\t<li>Kör testprogrammet och ta ut årsredovisningsnoten för HELA anläggningsregistret. Kör dist och ta ut årsredovisningsnoten för HELA anläggningsregistret. Jämför dessa och kontrollera att inget förutom bidragshanteringen är ändrat</li>\n\t</ul>\n\t</li>\n</ul>\n\n\n\n",
      "customfield_10034": "Bidrag visades inte korrekt f&#xF6;r avyttrade och utrangerade investeringar i rapport &#xC5;rsredovisningsnot anl&#xE4;ggningstillg&#xE5;ngar",
      "customfield_10035": "Rapport &#xC5;rsredovisningsnot anl&#xE4;ggningstillg&#xE5;ng visade inte bidragen korrekt f&#xF6;r investeringar som avyttrats eller s&#xE5;lts under &#xE5;ret.  Felet &#xE4;r r&#xE4;ttat och raden f&#xF6;r Utg&#xE5;ende ackumulerade bidrag f&#xF6;r utrangerade och eller avyttrade investeringar visar nu 0 kr. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Fält bidrag följer inte med när en investering avyttras eller utrangeras ",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10018",
          "id": "10018",
          "name": "Anläggningsredovisning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Problembeskrivning:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "KS ärende från Karin Knutsson i Gislaved. Anl nr B0021 avyttrades under 2018. En av investeringsraderna var markerade med 140 000 kr i bidrag eftersom anskaffningsvärdet reducerats med detta värde. Rapport Årsredovisningsnot visar anskaffningsvärde före avdraget bidrag och därefter bidragsbelopp och nettovärde. Programmet lägger inte till bidragsbeloppet på rad försäljningar och utrangeringar varken för anskaffningsvärdet eller bidraget vilket leder till att utgående anskaffnignsvärde blir 140 000 och utgående ackumulerade bidrag blir - 140 000 kr. Netto anskaffningsvärde blir korrekt men inte bruttovärdena.  "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Lösning:",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              },
              {
                "type": "text",
                "text": " "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "När en utrangering eller avyttring görs ska programmet hämta information från fält bidrag inv året oc fält bidrag tidigare år. Bidragssumman ska inte påverka bokföringen. Informationen ska användas när programmet tar fram "
              },
              {
                "type": "text",
                "text": "Årsredovisningsnot anl tillgångar.",
                "marks": [
                  {
                    "type": "em"
                  }
                ]
              },
              {
                "type": "text",
                "text": " Bidragsbeloppet ska läggas till i raderna för försäljningar och utrangeringar. I del "
              },
              {
                "type": "text",
                "text": "Anskaffningsvärde",
                "marks": [
                  {
                    "type": "em"
                  }
                ]
              },
              {
                "type": "text",
                "text": " före avdraget bidrag läggs det till i minus och i del "
              },
              {
                "type": "text",
                "text": "Bidrag ",
                "marks": [
                  {
                    "type": "em"
                  }
                ]
              },
              {
                "type": "text",
                "text": "läggs det till i plus. "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Se bifogat ex från Gislaved databas "
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Testprogram här: N:\\temp\\testprogram\\EK270\\aveny\\AvenyMain.exe"
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Acceptanskriterier: (by example - skrivet av Arno - bör stämmas av m Rebecka)",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Kör "
                      },
                      {
                        "type": "text",
                        "text": "Aveny Distr",
                        "marks": [
                          {
                            "type": "strong"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "text": " mot mot utbildningsmiljön, ej GAS och återställ din utbildningsdatabas"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Gå in i rutin Investeringsrader, per månad 2019-12, tabba ur"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Knyt investeringsrad med vernr 10015 och belopp 320 000 till en ny investering på befintlig anläggningstillgång I0002 Kompaktrgrävare. Inv.datum 2019-03-01, avskr tid 5 år. "
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Registrera 10000 kr i fältet “Bidrag inv året” och 20000 kr i fältet “Bidrag tidigare år” på den nya investeringen."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Beräkna och bokför avskrivningar t o m föregående bokf.period (ex 2019-09)"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Avyttra hela anläggningstillgången innevarande period (ex 2019-10-01)"
                      }
                    ]
                  },
                  {
                    "type": "bulletList",
                    "content": [
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "Bokf.datum 191024"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "Försäljn.pris 500 0000"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "Bokför “Intäkt från försäljning” på 3990-1010-900 och “Realisationsvint/förlust” på 3973-1010-900"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Gå in i rutinen Investeringar, Per månad “2019-12”, gör ett urval på I0002"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Skriv ut “Årsredovisningsnot anläggningstillgångar”"
                      }
                    ]
                  },
                  {
                    "type": "bulletList",
                    "content": [
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "Se att felet enligt beskrivningen finns, dvs"
                              }
                            ]
                          },
                          {
                            "type": "bulletList",
                            "content": [
                              {
                                "type": "listItem",
                                "content": [
                                  {
                                    "type": "paragraph",
                                    "content": [
                                      {
                                        "type": "text",
                                        "text": "Beloppet på rad “Anskaffningsvärde före avdrag för bidrag, Försäljningar och utrangeringar” innehåller inte bidragssumman på 30 000"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "listItem",
                                "content": [
                                  {
                                    "type": "paragraph",
                                    "content": [
                                      {
                                        "type": "text",
                                        "text": "Beloppet på rad “Anskaffningsvärde före avdrag för bidrag, Utgående ackumulerade anskaffningsvärde” innehåller inte bidragssumman på 30 000. Denna rad ska vara summan av ovanstående rader i gruppen “Anskaffningsvärde före avdrag för bidrag” och ska vara 0."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "listItem",
                                "content": [
                                  {
                                    "type": "paragraph",
                                    "content": [
                                      {
                                        "type": "text",
                                        "text": "Belopp saknas på rad “Bidrag, Försäljningar och utrangeringar”"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "listItem",
                                "content": [
                                  {
                                    "type": "paragraph",
                                    "content": [
                                      {
                                        "type": "text",
                                        "text": "Beloppet på rad “Bidrag, Utgående ackumulerade bidrag” innehåller inte bidragssumman på 30 000. Denna rad ska vara summan av ovanstående rader i gruppen “Anskaffningsvärde före avdrag för bidrag” och ska vara 0."
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Kör sedan det "
                      },
                      {
                        "type": "text",
                        "text": "rättade programmet",
                        "marks": [
                          {
                            "type": "strong"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Gå in i rutinen Investeringar, Per månad “2019-12”, gör ett urval på I0002"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Skriv ut “Årsredovisningsnot anläggningstillgångar”"
                      }
                    ]
                  },
                  {
                    "type": "bulletList",
                    "content": [
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "Se att felet är åtgärdat, dvs"
                              }
                            ]
                          },
                          {
                            "type": "bulletList",
                            "content": [
                              {
                                "type": "listItem",
                                "content": [
                                  {
                                    "type": "paragraph",
                                    "content": [
                                      {
                                        "type": "text",
                                        "text": "Beloppet på rad “Anskaffningsvärde före avdrag för bidrag, Försäljningar och utrangeringar” innehåller bidragssumman på 30 000"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "listItem",
                                "content": [
                                  {
                                    "type": "paragraph",
                                    "content": [
                                      {
                                        "type": "text",
                                        "text": "Beloppet på rad “Anskaffningsvärde före avdrag för bidrag, Utgående ackumulerade anskaffningsvärde” innehåller bidragssumman på 30 000. Denna rad ska vara summan av ovanstående rader i gruppen “Anskaffningsvärde före avdrag för bidrag” och ska vara 0."
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "listItem",
                                "content": [
                                  {
                                    "type": "paragraph",
                                    "content": [
                                      {
                                        "type": "text",
                                        "text": "Belopp 30 000 finns på rad “Bidrag, Försäljningar och utrangeringar”"
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type": "listItem",
                                "content": [
                                  {
                                    "type": "paragraph",
                                    "content": [
                                      {
                                        "type": "text",
                                        "text": "Beloppet på rad “Bidrag, Utgående ackumulerade bidrag” innehåller  bidragssumman på 30 000. Denna rad ska vara summan av ovanstående rader i gruppen “Anskaffningsvärde före avdrag för bidrag” och ska vara 0."
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "Kör testprogrammet och ta ut årsredovisningsnoten för HELA anläggningsregistret. Kör dist och ta ut årsredovisningsnoten för HELA anläggningsregistret. Jämför dessa och kontrollera att inget förutom bidragshanteringen är ändrat"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "paragraph",
            "content": []
          }
        ]
      },
      "customfield_10034": "Bidrag visades inte korrekt för avyttrade och utrangerade investeringar i rapport Årsredovisningsnot anläggningstillgångar",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Rapport Årsredovisningsnot anläggningstillgång visade inte bidragen korrekt för investeringar som avyttrats eller sålts under året.  Felet är rättat och raden för Utgående ackumulerade bidrag för utrangerade och eller avyttrade investeringar visar nu 0 kr. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  },
  {
    "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    "id": "11861",
    "self": "https://eniacdata.atlassian.net/rest/api/3/issue/11861",
    "key": "EK-148",
    "renderedFields": {
      "summary": null,
      "components": null,
      "description": "<p>Som ekonom vill jag att det ska gå betydligt snabbare att </p>\n\n<ul>\n\t<li>bokföra avskrivningar</li>\n\t<li>bokföra internränta</li>\n\t<li>jobba med anläggningstillgångar i rutin Anläggningstillgångar.</li>\n</ul>\n\n\n<p>För kunder som kört Aveny Anläggningsredovisning länge så tar det väldigt lång tid för systemet att beräkna värdet för en stor anläggningstillgång med många investeringar och många avskrivningar. <br/>\nI Malmö tog det typ 3 timmar att bokföra avskrivningar. Vi har gjort en förbättring men det tar antagligen ändå typ 1,5 timmar att göra det. Det kan ta typ 2-3 minuter att titta på en anläggningstillgång.</p>\n\n<p><b>Acceptanskriterier</b></p>\n\n<ul>\n\t<li>Kör ett program med den rättade hanteringen mot en kunddatabas [säg till om du vill köra i driftsmiljö] och kör befintligt distr-program mot samma kunddatabas.</li>\n\t<li>Stäm av följande för Bokföring avskrivningar, Bokför internränta samt genom att gå in på vissa anläggningstillgångar i rutin Anläggningar/inventarier:\n\t<ul>\n\t\t<li>det blir exakt samma resultat på alla värden som beräknas/presenteras</li>\n\t\t<li>det går snabbare med det nya programmet [säg till om du vill ha hjälp med att mäta tiden - det finns sätt i programmet för detta]. Notera gärna hur mycket snabbare det går så att vi kan förmedla förbättringen i ändringsloggen.</li>\n\t</ul>\n\t</li>\n\t<li>Vi behöver stämma av ovanstående även för en databas som använder fördelningsmallar</li>\n</ul>\n\n\n\n\n\n\n<p>Jag (Arno) gjorde en ansats (i EK148 branchen) på hur vi kan snabba upp detta (gjorde detta i början av juni när det var tomt i sprinten). Om jag kör bokför avskrivningar i Linköping i distr-versionen så tar det 30 minuter. Kör jag det med anpassningar i EK148 branchen så tar det 6 minuter.</p>",
      "customfield_10034": "Prestandaf&#xF6;rb&#xE4;ttring rutin Bokf&#xF6;r avskrivningar och rutin Bokf&#xF6;r internr&#xE4;nta  ",
      "customfield_10035": "Vi har arbetat med prestandaf&#xF6;rb&#xE4;ttring som inneb&#xE4;r att tiden f&#xF6;r att ber&#xE4;kna avskrivningar och internr&#xE4;nta ska minska med 60-70%. ",
      "customfield_10036": null
    },
    "fields": {
      "summary": "Testa förbättring av prestanda i Anläggningsredovisning",
      "components": [
        {
          "self": "https://eniacdata.atlassian.net/rest/api/3/component/10018",
          "id": "10018",
          "name": "Anläggningsredovisning"
        }
      ],
      "description": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Som ekonom vill jag att det ska gå betydligt snabbare att "
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "bokföra avskrivningar"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "bokföra internränta"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "jobba med anläggningstillgångar i rutin Anläggningstillgångar."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "För kunder som kört Aveny Anläggningsredovisning länge så tar det väldigt lång tid för systemet att beräkna värdet för en stor anläggningstillgång med många investeringar och många avskrivningar. "
              },
              {
                "type": "hardBreak"
              },
              {
                "type": "text",
                "text": "I Malmö tog det typ 3 timmar att bokföra avskrivningar. Vi har gjort en förbättring men det tar antagligen ändå typ 1,5 timmar att göra det. Det kan ta typ 2-3 minuter att titta på en anläggningstillgång."
              }
            ]
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Acceptanskriterier",
                "marks": [
                  {
                    "type": "strong"
                  }
                ]
              }
            ]
          },
          {
            "type": "bulletList",
            "content": [
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Kör ett program med den rättade hanteringen mot en kunddatabas [säg till om du vill köra i driftsmiljö] och kör befintligt distr-program mot samma kunddatabas."
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Stäm av följande för Bokföring avskrivningar, Bokför internränta samt genom att gå in på vissa anläggningstillgångar i rutin Anläggningar/inventarier:"
                      }
                    ]
                  },
                  {
                    "type": "bulletList",
                    "content": [
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "det blir exakt samma resultat på alla värden som beräknas/presenteras"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "listItem",
                        "content": [
                          {
                            "type": "paragraph",
                            "content": [
                              {
                                "type": "text",
                                "text": "det går snabbare med det nya programmet [säg till om du vill ha hjälp med att mäta tiden - det finns sätt i programmet för detta]. Notera gärna hur mycket snabbare det går så att vi kan förmedla förbättringen i ändringsloggen."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "listItem",
                "content": [
                  {
                    "type": "paragraph",
                    "content": [
                      {
                        "type": "text",
                        "text": "Vi behöver stämma av ovanstående även för en databas som använder fördelningsmallar"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "paragraph",
            "content": []
          },
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Jag (Arno) gjorde en ansats (i EK148 branchen) på hur vi kan snabba upp detta (gjorde detta i början av juni när det var tomt i sprinten). Om jag kör bokför avskrivningar i Linköping i distr-versionen så tar det 30 minuter. Kör jag det med anpassningar i EK148 branchen så tar det 6 minuter."
              }
            ]
          }
        ]
      },
      "customfield_10034": "Prestandaförbättring rutin Bokför avskrivningar och rutin Bokför internränta  ",
      "customfield_10035": {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Vi har arbetat med prestandaförbättring som innebär att tiden för att beräkna avskrivningar och internränta ska minska med 60-70%. "
              }
            ]
          }
        ]
      },
      "customfield_10036": {
        "self": "https://eniacdata.atlassian.net/rest/api/3/customFieldOption/10005",
        "value": "Ja",
        "id": "10005"
      }
    }
  }
]