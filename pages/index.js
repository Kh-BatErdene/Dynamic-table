import { useState } from "react";

export default function Home() {
  const [isRowArray, setIsRowArray] = useState([]);
  const [isColumnArray, setIsColumnArray] = useState([]);

  function AddColumn() {
    setIsColumnArray([...isColumnArray, {}]);
  }
  function AddRow() {
    setIsRowArray([...isRowArray, {}]);
  }

  function AddTr() {
    return isRowArray.map((item) => {
      return (
        <tr className="height20">
          <td className="height20">
            <input type="text" className="story_fs_10 width145" />
          </td>
          <AddTd />
        </tr>
      );
    });
  }

  function AddTd() {
    return isColumnArray.map((item) => {
      return (
        <>
          <td className="width30 height20"></td>
        </>
      );
    });
  }
  function AddGraphicField() {
    return isColumnArray.map((item, index) => {
      return (
        <td className="width30 height20  center_text">
          <select className="width30 center_text outline_none">
            <option value="0"></option>
            <option value="1">&#x2B06;</option>
            <option value="2"> &#x2B06;</option>
            <option value="3">&#x25BD;</option>
            <option value="4">&#9651;</option>
            <option value="5">&#x290F;</option>
            <option value="6">&#8226;</option>
            <option value="7">×</option>
          </select>
        </td>
      );
    });
  }

  return (
    <div className="story_page break_before">
      <div className="story_no_border_auto">
        <div className="flex_div bottom_margin20">
          <button onClick={() => AddColumn()}>Add column</button>
          <button onClick={() => AddRow()}>Add row</button>
          <button>Undo</button>
        </div>
        <table className="tg storyFontSize border_bottom_n">
          <tbody>
            <tr className="height20">
              <td colSpan="4" className="height20 width120">
                Хэрэглэсэн эм
              </td>
              <AddTd />
            </tr>

            <tr className="height20">
              <td colSpan="4"></td>
              <AddTd />
            </tr>
            <tr className="height20">
              <td colSpan="4"></td>
              <AddTd />
            </tr>
            <tr className="height20">
              <td colSpan="4"></td>
              <AddTd />
            </tr>
            <tr className="height20">
              <td colSpan="4">Хүчилтөрөгч</td>
              <AddTd />
            </tr>
            <tr className="height20">
              <td colSpan="4">Галотан/изофлуран</td>
              <AddTd />
            </tr>
            <tr className="height20">
              <td colSpan="4">Азотын исэл</td>
              <AddTd />
            </tr>
            <tr className="height20">
              <td colSpan="4">Агаар</td>
              <AddTd />
            </tr>

            {/* GrapicField */}
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
              ></td>

              <AddGraphicField />
            </tr>

            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr>
              <td rowSpan="15" className="rotate_text width35 ">
                Аппаратын төрөл____________________
              </td>
              <td rowSpan="15" className="rotate_text width35">
                Өвчтний байрлал____________________
              </td>
              <td rowSpan="15" className="rotate_text  width35">
                Онцгой аргачлал____________________
              </td>
              <AddGraphicField />
            </tr>

            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
            <tr className="height20">
              <AddGraphicField />
            </tr>
          </tbody>
        </table>
      </div>

      {/* Next table */}
      <div className="story_no_border_auto ">
        <table style={{ borderTop: "none" }} className="tg">
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
                &nbsp; -АДs
                <span className="story_fs_12 left_margin10">&#8226;</span>
                &nbsp; -пульс
                <span className="story_fs_12 left_margin10">×</span>
                &nbsp; -SaO2
              </td>
            </tr>
            <tr>
              <td className="rotate_text height60 ">Мэдээгүйжүүлгийн төрөл</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
