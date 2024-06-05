let mock_post = [
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Miss USA Noelia Voigt resigns title on mental health grounds","description":"Noelia Voigt said she believed in making decisions \"that feel best for you and your mental health\".","url":"https://www.bbc.co.uk/news/world-us-canada-68973924","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/F648/production/_133284036_gettyimages-2103446443.jpg","publishedAt":"2024-05-08T04:07:11.791656Z","content":"Reigning Miss USA Noelia Voigt has resigned her title, citing mental health reasons. \r\nMs Voigt, who won the annual competition in September, said she believed in making decisions \"that feel best for… [+1035 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"North Korea: Kim family's master propagandist dies at 94","description":"Kim Ki Nam built the personality cult of North Korea's ruling dynasty.","url":"https://www.bbc.co.uk/news/articles/c13626468yno","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/a691/live/4292fe10-0cdd-11ef-9c6c-018d20c88a06.jpg","publishedAt":"2024-05-08T03:52:16.4156241Z","content":"North Korea's former propaganda master Kim Ki Nam has died, state media said on Wednesday. He was 94.\r\nHe died due to old age and \"multiple organ dysfunction\" for which he had been receiving treatmen… [+1907 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"US reveals it paused shipment of bombs for Israel over Rafah concerns","description":"US reveals it paused bomb shipment for Israel over concerns it was going ahead with Rafah offensive.","url":"https://www.bbc.co.uk/news/world-middle-east-68974624","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/542C/production/_133284512_c5cb33c6cf5c946799bc257476f344b37b6d08a6-1.jpg","publishedAt":"2024-05-08T03:52:15.4627363Z","content":"The US last week paused a bomb shipment for Israel over concerns it was going ahead with a major ground operation in Rafah, southern Gaza, a senior administration official says. \r\nThe shipment consis… [+1832 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Tense exchanges as Trump lawyer spars with Stormy Daniels in hush-money trial","description":"The former adult-film star provided a detailed, salacious account of her alleged sexual encounter with Mr Trump.","url":"https://www.bbc.co.uk/news/world-us-canada-68972977","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/12320/production/_133282547_4c2e04862e82380f429d541bbc2e49fab3317e11.jpg","publishedAt":"2024-05-08T03:37:11.1504183Z","content":"Media caption, Watch: The BBC's Nada Tawfik on what happened when Stormy Daniels took the stand\r\nDonald Trump's lawyer attacked Stormy Daniels' credibility during heated cross-examination at the form… [+4046 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Failed crypto firm FTX says has more than needed to pay victims","description":"The failed cryptocurrency giant says it has billions of dollars more than needed to cover its debts.","url":"https://www.bbc.co.uk/news/articles/c9wz3wkrdj9o","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/ae8f/live/26451f10-0cdb-11ef-82d9-d3118b78c9b3.jpg","publishedAt":"2024-05-08T02:37:14.2747872Z","content":"Collapsed cryptocurrency exchange FTX says it has billions of dollars more than it needs to repay customers.\r\nThe firm says that once it has sold off its remaining assets it will have as much as $16.… [+885 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Donald Trump and Stormy Daniels face off on tense day in court","description":"The adult-film star recounted her alleged sexual encounter with the ex-president and faced heated questioning from his lawyers.","url":"https://www.bbc.co.uk/news/world-us-canada-68974398","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/10AFC/production/_133284386_b8806497bc4d8e1effdda6951958436f5fb0b59a0_0_3000_22503000x2250.jpg","publishedAt":"2024-05-07T23:52:18.133646Z","content":"Stormy Daniels and Donald Trump have been locked in a years-long public battle over an alleged sexual encounter, a hush-money deal paid by the former president's fixer, and their respective efforts t… [+6968 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Philippines: Is the unstoppable Marcos-Duterte alliance headed for divorce?","description":"Two powerful Philippine political dynasties are sparring publicly and trading shocking allegations.","url":"https://www.bbc.co.uk/news/world-asia-68137494","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/0602/production/_133283510_sara_duterte_ferdinand_getty.jpg","publishedAt":"2024-05-07T23:07:14.285737Z","content":"With his signature bombast, former Philippine President Rodrigo Duterte told a crowd of cheering supporters in January that his successor was a drug addict. The man who replaced him, Ferdinand \"Bongb… [+6357 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Trump's classified documents trial in Florida indefinitely postponed","description":"The former US president's federal trial in Florida is now unlikely to begin before the 2024 election.","url":"https://www.bbc.co.uk/news/world-us-canada-68972255","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/862C/production/_133284343_gettyimages-1258567086.jpg","publishedAt":"2024-05-07T23:07:11.4739373Z","content":"A judge has indefinitely postponed Donald Trump's federal trial in Florida over his alleged mishandling of classified documents while in office.\r\nUS District Judge Aileen Cannon said that setting a t… [+2719 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"‘Sustainable calm’ proposal splits Israel and Hamas","description":"Israel says it has four issues with the draft ceasefire deal - including an end to war.","url":"https://www.bbc.co.uk/news/world-middle-east-68971818","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/10EDA/production/_133283396_36f4790024d84a6768f91d15d404e3b3d6fe57710_0_5500_36671000x667.jpg","publishedAt":"2024-05-07T20:22:18.2867602Z","content":"After months of stalemate, the search for peace in Gaza has reached a critical stage. UN chief Antonio Guterres says it is a \"decisive moment for the Palestinian and Israeli people and for the fate o… [+3661 chars]"},
    {"source":{"id":"bbc-news","name":"BBC News"},"author":"BBC News","title":"Security guard shot at Drake's Toronto home amid beef with Kendrick Lamar","description":"A lyrical beef between the Canadian rapper and US rival Kendrick Lamar has exploded in recent days.","url":"https://www.bbc.co.uk/news/world-us-canada-68972253","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/DECE/production/_133283075_gettyimages-2089852875.jpg","publishedAt":"2024-05-07T16:52:23.1763063Z","content":"Toronto police have said a security guard was shot overnight outside the home of Canadian rapper Drake.\r\nIt comes amid his escalating war of words with US rap rival Kendrick Lamar.\r\nPolice said suspe… [+1288 chars]"}
];

export default mock_post;