import React from 'react';
import { FilterCheckbox } from './FilterCheckbox.jsx';

// figma node: 2105:1226 主題篩選清單 (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TopicFilterList(_p = {}) {
  const props = { ..._p, state: _p.state ?? "收合" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"動作冒險"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"另類歷史"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"動物"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"藝術"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"亞裔與太平洋島民"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"傳記"}
        text2={"50"}
        state={"unchecked"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-link)",
          textDecoration: "underline",
          flexShrink: 0,
        }}>{props.text1 ?? "顯示更多 ﹀"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"動作冒險"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"另類歷史"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"動物"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"藝術"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"亞裔與太平洋島民"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"傳記"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"多族裔／跨族裔"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"男孩／男性"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"職業與實習"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"經典文學"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"漫畫與圖像小說"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"成長"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"電腦與數位媒體"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"烹飪與食物"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"身心障礙"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"多元文化"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"反烏托邦"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"書信體"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"童話與民間故事"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"家庭"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"奇幻"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"時尚與美妝"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"原住民族題材"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"鬼故事"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"女孩／女性"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"哥德式"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"健康與生活"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"西語裔與拉丁裔"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"歷史小說"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"節慶與慶典"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"恐怖"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"幽默"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"互動冒險"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"法律與犯罪"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"神話與傳說"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"LGBTQ+"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"文學性"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"魔幻寫實"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"美人魚／人魚"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"怪物"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"推理與偵探"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"超自然／靈異"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"詩歌"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"政治與政府"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"環保與綠色生活"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"宗教"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"浪漫"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"學校與教育"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"科學與自然"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"科幻"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"短篇小說與選集"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"社會議題"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"運動與休閒"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"蒸汽龐克"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"超級英雄"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"科技"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"驚悚與懸疑"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"旅行與交通"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"都市文學／街頭文學"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"吸血鬼"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"虛擬世界"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"戰爭與軍事"}
        text2={"50"}
        state={"unchecked"}
      />
      <FilterCheckbox
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        text1={"西部小說"}
        text2={"50"}
        state={"unchecked"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-base)",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-link)",
          textDecoration: "underline",
          flexShrink: 0,
        }}>{props.text1 ?? "顯示較少 ﹀"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=收合
    "state=收合": __body0,
    // figma: State=展開
    "state=展開": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TopicFilterList;
