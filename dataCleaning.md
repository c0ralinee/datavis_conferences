1.	删除paper type：M
{Paper type: one of C (conference paper), J (journal paper), M (miscellaneous). If you would like to filter for scientific research articles, then take all Cs and Ts. Papers with an "M" are not typically considered archival publications.}

2.	已经替换C-conference paper, J-journal paper

3.	是否删除DOI无效的文章？
YES

4.	已删除Author names，拆分Author names deduped
（最长为AuthorNames-Deduped-17）

5.	Internal reference的意义？
{A list of internal references to other IEEE VIS papers using DOIs of the papers in this list. This list does not include citations to papers external to this conference series.}
时间轴连线

6.	两个citation来源的处理，加总？取最大值？ 
{ AminerCitationCount_04-2020: A number indicating how many times this publication has been cited. The citation count was extracted from the Aminer dataset (DBLP-Citation-network V10). The title of the column indicates the last time this count has been updated. A missing value indicates that this publication was not found in the Aminer dataset.

XploreCitationCount - 2021-02: A number indicating how many times this publication has been cited. This citation count was extracted from IEEEXplore. The title of the column indicates the last time this count has been updated.  A missing value indicates that the article was not found in IEEEXPlore.}

7.	增加计算AuthorNum（即每篇文章参与人数）
