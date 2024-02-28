import { useState } from "react";

export default function Home() {
  //useStates
  const [isRowArray, setIsRowArray] = useState([]);
  const [isColumnArray, setIsColumnArray] = useState([]);
  const [mainArray, setMainArray] = useState([]);
  const [dotPlus, setdotPlus] = useState(220);
  const [dotline, setlinedata] = useState([]);
  const [isTwo, setIsTwo] = useState([]);
  const [isThree, setIsThree] = useState([]);
  const [isFour, setIsFour] = useState([]);
  const [isFive, setIsFive] = useState([]);
  const [isSix, setIsSix] = useState([]);
  const [isSeven, setIsSeven] = useState([]);

  // 1. onclicking functions
  function AddColumn() {
    setIsColumnArray([...isColumnArray, {}]);
  }
  function AddRow() {
    setIsRowArray([...isRowArray, {}]);
  }

  function updateField(changeDataitem, idx) {
    let update = isColumnArray.map((item, index) => {
      if (idx === index) {
        return { ...changeDataitem };
      } else {
        return item;
      }
    });
    setIsColumnArray(update);
  }

  function AddGraphicField(props) {
    function handleClick(value, index) {
      const changeData = { ...isColumnArray[index], [props.fieldId]: value };

      const x = 148 + 29 * index;
      const y = 10 + 20 * props.fieldId;
      if (value === "UpArrow") {
        setlinedata((prev) => [...prev, `${x}, ${y}, ${x}, ${y}`]);
      }
      if (value === "UpNarrowArrow") {
        setIsTwo((prev) => [...prev, `${x}, ${y}, ${x}, ${y}`]);
      }
      if (value === "DownTriangle") {
        setIsThree((prev) => [...prev, `${x}, ${y}, ${x}, ${y}`]);
      }
      if (value === "UpTriangle") {
        setIsFour((prev) => [...prev, `${x}, ${y}, ${x}, ${y}`]);
      }
      if (value === "RightDotArrow") {
        setIsFive((prev) => [...prev, `${x}, ${y}, ${x}, ${y}`]);
      }

      if (value === "Dot") {
        setIsSix((prev) => [...prev, `${x}, ${y}, ${x}, ${y}`]);
      }
      if (value === "Xmarks") {
        setIsSeven((prev) => [...prev, `${x}, ${y}, ${x}, ${y}`]);
      }

      updateField(changeData, index);
    }

    return isColumnArray.map((item, index) => {
      const value = item[props.fieldId];

      return (
        <td key={index} className="width30 height20  center_text">
          <select
            onChange={(e) => {
              handleClick(e.target.value, index);
            }}
            value={value}
            className="borderless_input outline_none width20 height20 center_text "
            style={{ opacity: 0.3 }}
          >
            <option value="Nan"></option>
            <option value="UpArrow">&#x2B06;</option>
            <option value="UpNarrowArrow"> &#x2B06;</option>
            <option value="DownTriangle">&#x25BD;</option>
            <option value="UpTriangle">&#9651;</option>
            <option value="RightDotArrow">&#x290F;</option>
            <option value="Dot">&#8226;</option>
            <option value="Xmark">×</option>
          </select>
        </td>
      );
    });
  }

  // 2. Custom field functions
  function AddTr() {
    return isRowArray.map((item, index) => {
      return (
        <tr className="height20" key={index}>
          <td colSpan="4">
            <input type="text" className="story_fs_10 width145" />
          </td>
          <AddTd />
        </tr>
      );
    });
  }

  function AddTd() {
    return isColumnArray.map((item, index) => {
      return <td key={index} className="width30 height20"></td>;
    });
  }

  //HTML
  return (
    <div className="story_page break_before ">
      <div className="story_no_border_auto">
        <div className="upcase main_title">Мэдээгүйжүүлэлтийн явц</div>
        <p className="story_fs_10 width600 storyTextRight">
          <input
            type="text"
            className="border_bottom_bl width25 story_fs_10 center_text"
          />
          <span>он</span>
          <input
            type="text"
            className="border_bottom_bl width15 story_fs_10 center_text"
          />
          <span>сар</span>
          <input
            type="text"
            className="border_bottom_bl width15 story_fs_10 center_text"
          />
          <span>өдөр</span>
          <input
            type="text"
            className="border_bottom_bl width15 story_fs_10 center_text"
          />
          <span>цаг</span>
          <input
            type="text"
            className="border_bottom_bl width15 story_fs_10 center_text"
          />
          <span>минут</span>
        </p>
        {/* table1 */}

        <button onClick={() => AddColumn()}>Багана нэмэх</button>
        {/* table1 */}
        <button onClick={() => AddRow()}>Эм нэмэх</button>
        <div
          style={{
            position: "relative",
          }}
        >
          <svg
            viewBox="0 0 600 495"
            style={{
              position: "absolute",
              top: `${dotPlus}px`,
              zIndex: "-1",
            }}
          >
            <polyline
              points={dotline}
              fill="none"
              stroke="black"
              style={{ zIndex: 100 }}
            />
            <polyline points={isTwo} fill="none" stroke="black" />
            <polyline points={isThree} fill="none" stroke="black" />
            <polyline points={isFour} fill="none" stroke="black" />
            <polyline points={isFive} fill="none" stroke="black" />
            <polyline points={isSix} fill="none" stroke="black" />
            <polyline points={isSeven} fill="none" stroke="black" />
          </svg>

          <table
            fieldId="table"
            className="tg border_bottom_n "
            style={{ height: "666px" }}
          >
            <thead className="storyFontSize right_border">
              <tr className="height20">
                <td colSpan="4">Хэрэглэсэн эм &nbsp; &nbsp; цаг/мин</td>
                <AddTd />
              </tr>
              <AddTr />
            </thead>
            <tbody className="story_fs_10">
              <tr className="height20">
                <td colSpan="4">
                  <input
                    type="text"
                    className="story_fs_10 width145 "
                    readOnly
                    value="Севофлуран изофлуран эз%"
                  />
                </td>
                <AddTd />
              </tr>
              <tr className="height20">
                <td colSpan="4">
                  <input
                    type="text"
                    className="story_fs_10 width145"
                    value="Хүчилтөрөгч л/мин "
                    readOnly
                  />
                </td>
                <AddTd />
              </tr>
              <tr className="height20">
                <td colSpan="4">
                  <input
                    type="text"
                    className="story_fs_10 width145"
                    value="Агаар л/мин"
                    readOnly
                  />
                </td>
                <AddTd />
              </tr>
              <tr className="height20">
                <td rowSpan="5" className="rotate_text">
                  Сэлбэсэн шингэн
                </td>
                <td colSpan="3">
                  <input type="text" className="storyFontSize width110" />
                </td>
                <AddTd />
              </tr>
              <tr className="height20">
                <td colSpan="3">
                  <input type="text" className="story_fs_10 width110" />
                </td>
                <AddTd />
              </tr>
              <tr className="height20">
                <td colSpan="3">
                  <input type="text" className="story_fs_10 width110" />
                </td>
                <AddTd />
              </tr>
              <tr className="height20">
                <td colSpan="3">
                  <input type="text" className="story_fs_10 width110" />
                </td>
                <AddTd />
              </tr>
              <tr className="height20">
                <td colSpan="3">
                  <input type="text" className="story_fs_10 width110" />
                </td>
                <AddTd />
              </tr>
              <tr className="height20">
                <td colSpan="4">
                  <input
                    type="text"
                    className="story_fs_10"
                    value="Алдсан цус мл"
                    readOnly
                  />
                </td>
                <AddTd />
              </tr>

              <tr className="height20">
                <td colSpan="4">
                  <input
                    type="text"
                    className="story_fs_10"
                    value="Шээс мл"
                    readOnly
                  />
                </td>
                <AddTd />
              </tr>

              {/* graphic table  */}
              <tr className="height20" style={{ position: "relative" }}>
                <td colSpan="3" rowSpan="7">
                  <input type="checkbox" />
                  <span>Судасны хатгалт</span>
                  <br />
                  <input type="checkbox" />
                  <span>Төвийн вен</span>
                  <br /> <input type="checkbox" />
                  <span>Пульсоксиметр</span>
                  <br />
                  <input type="checkbox" />
                  <span>Зүрхний монитор</span>
                  <br />
                  <input type="checkbox" />
                  <span>АД хэмжих</span>
                  <br /> <input type="checkbox" />
                  <span>Соруулга</span>
                  <br />
                  <input type="checkbox" />
                  <span>Нүд хамгаалсан</span>
                  <br /> <input type="checkbox" />
                  <span>Давсагт гуурс</span>
                  <br />
                </td>
                {/* graph */}
                <td
                  rowSpan="23"
                  style={{ width: "37px" }}
                  className="vertical_end storyTextRight "
                >
                  <div>
                    <p>200</p>
                    <br />
                    <p style={{ fontSize: "9.3px" }}>SaO 180</p>
                    <br />
                    <p>100 160</p> <br />
                    <p>96 &nbsp; 140</p>
                    <br />
                    <p className="bottom_margin5">92 &nbsp; 120</p> <br />
                    <br />
                    <p className="bottom_margin5">88 &nbsp; 100</p> <br />
                    <p className="bottom_margin5">86 &nbsp; &nbsp; 80</p>
                    <br />
                    <br />
                    <p className="bottom_margin5">84 &nbsp; &nbsp; 60</p>
                    <br />
                    <p className="bottom_margin5">40</p>
                    <br />
                    <br />
                    <p className="bottom_margin20">20</p>
                    <br /> <br /> <br />
                  </div>
                </td>
                <AddGraphicField fieldId="0" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="1" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="2" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="3" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="4" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="5" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="6" />
              </tr>
              <tr>
                <td rowSpan="15" className="rotate_text width25">
                  Аппаратын төрөл____________________
                </td>
                <td rowSpan="15" className="rotate_text width25">
                  Өвчтний байрлал____________________
                </td>
                <td rowSpan="15" className="rotate_text  width25">
                  Онцгой аргачлал____________________
                </td>
                <AddGraphicField fieldId="7" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="8" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="9" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="10" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="11" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="12" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="13" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="14" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="15" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="16" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="17" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="18" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="19" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="20" />
              </tr>
              <tr className="height20">
                <AddGraphicField fieldId="21" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* table3 */}
      <div className="story_no_border_auto ">
        <table style={{ borderTop: "none" }} className="tg  ">
          <tbody className="story_fs_10">
            <tr>
              <td colSpan="4" className="width20">
                X мэдээгүйжүүлэг эхэлсэн, дууссан: &nbsp;
                <span className="story_fs_12"> &#x2B06; </span> -интубац &nbsp;
                <span className="story_fs_12 left_margin10 rotate_text">
                  &#x2794;
                </span>
                &nbsp; -эксбутац
                <span className="story_fs_12 left_margin10">&#x25BD;</span>
                &nbsp; -хагалгаа эхэлсэн
                <span className="story_fs_12 left_margin10">&#9651;</span>
                &nbsp; -дууссан
                <span className="story_fs_12 left_margin10"> &#x290F;</span>
                &nbsp; -АД
                <span className="story_fs_12 left_margin10">&#8226;</span>
                &nbsp; -пульс
                <span className="story_fs_12 left_margin10">×</span>
                &nbsp; -SaO2
              </td>
            </tr>
            <tr>
              <td className="rotate_text height60 "> Мэдээгүйжүүлгийн төрөл</td>
              <td>
                <div className="left_margin10">
                  <input type="checkbox" />
                  Ерөнхий унтуулга
                  <br />
                  <input type="checkbox" />
                  ЭТМ
                  <input type="checkbox" />
                  Хошуувч
                  <input type="checkbox" />
                  Төвөнхийн хошуувч <input type="checkbox" />
                  Судасны <br />
                  <input type="checkbox" />У + дус
                </div>

                <div className="left_margin10 ">
                  <a className="left_margin20">Интубац:</a>
                  <input type="checkbox" />
                  төвөгтэй
                  <input type="checkbox" />
                  үгүй
                  <input type="checkbox" />
                  ам
                  <input type="checkbox" />
                  хамар
                  <br />
                  <a className="left_margin20"> Цагаан хоолойн гуурс #:</a>
                  <input type="text" className="border_bottom_bl width25" />
                  Хэмжээ
                  <input type="text" className="border_bottom_bl width25" />
                  см <br />
                  <a className="left_margin20">Хос замтай гуурс хий</a>
                  <input type="text" className="border_bottom_bl width25" />
                  мл <br />
                  <a className="left_margin20">Оролдлогын тоо:</a>
                  <input type="text" className="border_bottom_bl width40" />
                  <br />
                  <a className="left_margin20"> Тусгай аргачлал:</a>
                  <input
                    type="text"
                    className="border_bottom_bl width150 bottom_margin5 "
                  />
                </div>
              </td>
              <td>
                <div className="left_margin10">
                  Бүсчилсэн:
                  <input type="checkbox" />
                  HXM
                  <input type="checkbox" />
                  НГХМ
                  <input type="checkbox" />
                  НГХГуурс
                  <br />
                  Зүүний #:
                  <input type="text" className="border_bottom_bl width25" />
                  G гүн
                  <input type="text" className="border_bottom_bl width25" />
                  см <br />
                  Төрөл:
                  <input type="checkbox" />
                  иртэй
                  <input type="checkbox" />
                  үзүүртэй
                  <input type="checkbox" />
                  Туохийн
                  <br />
                  Хатгалтын түвшин:
                  <input type="text" className="border_bottom_bl width25" />
                  чиглэл:
                  <input type="text" className="border_bottom_bl width25" />
                  <br />
                  Оролдлогын тоо:
                  <input type="text" className="border_bottom_bl width25" />
                  <br />
                  Мэдээгүйжүүлэлтийн түвшин:
                  <input type="text" className="border_bottom_bl width25 " />
                  <br />
                  Нугасны шингэний өнгө:
                  <input type="checkbox" />
                  хэвийн
                  <input type="checkbox" />
                  цустай
                </div>
              </td>
            </tr>
            <tr className="sense_td fontSize">
              <td colSpan="2" className="left_text ">
                <div>Тайлбар:</div>
                <textarea className="width350 story_fs_10"></textarea>
              </td>
              <td colSpan="2" className="left_text ">
                <div>Хүндрэл:</div>
                <textarea className="width300 story_fs_10"></textarea>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
