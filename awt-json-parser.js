/**
 * Parsed den uebergebenen JSON String und stellt ihn als Object dar.
 * Erstellt mithilfe dieses Objects ein neues Object, das einen für
 * unsere Grid Library Tiles.js angepasstes Format hat.
 * 
 * @param {string} JSON_STRING - der zu parsende JSON String
 * 
 * @return {object} das angepasste Object
 */
function parse(JSON_STRING) {

    const JSON_OBJ = JSON.parse(JSON_STRING);
  
  
    const breakpoints = [];
    const grids = [];
    const tiles = [];
    const contents = [];
  
    
    const boardTemplates = JSON_OBJ["board_templates"];
    Object.keys(boardTemplates).forEach(breakpoint => {
     
      // speichert alle breakpoints als Zahlenwerte
      // in dem Array {breakpoints}
      breakpoints.push(parseInt(breakpoint));
  
      let layout = boardTemplates[breakpoint];
  
  
      // speichert die unterschiedlichen Grid-Layouts
      // als Objekte im Array {grids}
      grids.push(
        {
          columns: layout.w,
          rows: layout.h,
          gutter: layout.gutter
        }
      );
      
      // speichert die Kachelgroessen als Paare [cols, rows]
      // im Array {tilePairs}
      // speichert außerdem den jeweiligen Inhalt einer Kachel
      // als Object im Array {gridContent}
      let tilePairs = [];
      let gridContent = [];
      for (let obj of layout.grid) {
        tilePairs.push([obj.cols, obj.rows]);
        gridContent.push(
          {
            playlist: obj.playlist,
            autoplay: obj.autoplay,
            autoplaySound: obj.autplay_sound
          }
        );
      }
      
      tiles.push(tilePairs);
      contents.push(gridContent);
  
    });
  
    // das angepasste Object
    let gridLayout = {
      id: JSON_OBJ.event_id,
      breakpoints: breakpoints,
      grids: grids,
      tiles: tiles,
      contents: contents
    };
    //console.log(JSON_OBJ);
    return gridLayout;
  }
  
  export default parse;