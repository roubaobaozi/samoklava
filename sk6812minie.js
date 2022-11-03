module.exports = {
    nets: {
        din: undefined,
        dout: undefined,
        VCC: 'VCC',
        GND: 'GND'
    },
    params: {
        class: 'LED',
        side: 'F' // ONLY CURRENTLY IS LAYED OUT FOR FACING THE FRONT SIDE THE WAY THE PINS ARE LAYED OUT, NEED A REVERSE TO FACE BACK!!!
    },
    body: p => `
      (module "SK6812-MINI-E" (layer F.Cu) (tedit 5ECEB660)
      
         ${p.at /* parametric position */}
         
         (fp_text reference "${p.ref}" (at 0 2.1 ${p.rot} unlocked) (layer ${p.param.side}.SilkS) 
            ${p.ref_hide}
            (effects (font (size 0.7 0.7) (thickness 0.15)))
         )
         (fp_text value "SK6812-MINI-E" (at 0 -0.5 ${p.rot} unlocked) (layer ${p.param.side}.SilkS) hide
            (effects (font (size 1 1) (thickness 0.15)))
         )
         (fp_poly (pts (xy -2.8 -1.4) (xy -2.2 -1.4) (xy -2.2 -2)) (layer ${p.param.side}.SilkS) (width 0.1))
         (fp_line (start 1.6 -1.4) (end 1.6 1.4) (layer Cmts.User) (width 0.12))
         (fp_line (start 1.6 1.4) (end -1.6 1.4) (layer Cmts.User) (width 0.12))
         (fp_line (start -1.6 1.4) (end -1.6 -1.4) (layer Cmts.User) (width 0.12))
         (fp_line (start -1.6 -1.4) (end 1.6 -1.4) (layer Cmts.User) (width 0.12))
         (fp_line (start 1.7 -1.5) (end 1.7 1.5) (layer Edge.Cuts) (width 0.12))
         (fp_line (start 1.7 1.5) (end -1.7 1.5) (layer Edge.Cuts) (width 0.12))
         (fp_line (start -1.7 1.5) (end -1.7 -1.5) (layer Edge.Cuts) (width 0.12))
         (fp_line (start -1.7 -1.5) (end 1.7 -1.5) (layer Edge.Cuts) (width 0.12))
         (pad "2" smd rect (at 2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.dout.str})
         (pad "1" smd rect (at 2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.VCC.str})
         (pad "3" smd roundrect (at -2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") (roundrect_rratio 0.25) ${p.net.GND.str})
         (pad "4" smd rect (at -2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "${p.param.side}.Cu" "${p.param.side}.Paste" "${p.param.side}.Mask") ${p.net.din.str})
         (model "/Users/danny/syncproj/kicad-libs/footprints/Keebio-Parts.pretty/3dmodels/SK6812MINI-E v1.step"
            (at (xyz 0 0 0))
            (scale (xyz 1 1 1))
            (rotate (xyz 90 0 0))
         )
      )

    `
}