type ThemeBaseColors = {
  [K in Theme]: { [X in BaseColors]: string };
};

type ThemeColors = {
  [K in Theme]: { [X in ColorKeys]: string };
};

export type Theme = 'General' | 'Neon_Style';

type BaseColors =
  | 'Basic_Primary_primary_50'
  | 'Basic_Primary_primary_100'
  | 'Basic_Primary_primary_200'
  | 'Basic_Primary_primary_300'
  | 'Basic_Primary_primary_400'
  | 'Basic_Primary_primary_500'
  | 'Basic_Primary_primary_600'
  | 'Basic_Primary_primary_700'
  | 'Basic_Primary_primary_800'
  | 'Basic_Primary_primary_900'
  | 'Basic_Dark_dark_50'
  | 'Basic_Dark_dark_100'
  | 'Basic_Dark_dark_200'
  | 'Basic_Dark_dark_300'
  | 'Basic_Dark_dark_400'
  | 'Basic_Dark_dark_500'
  | 'Basic_Dark_dark_600'
  | 'Basic_Dark_dark_700'
  | 'Basic_Dark_dark_800'
  | 'Basic_Dark_dark_900'
  | 'Basic_Secondary_secondary_50'
  | 'Basic_Secondary_secondary_100'
  | 'Basic_Secondary_secondary_200'
  | 'Basic_Secondary_secondary_300'
  | 'Basic_Secondary_secondary_400'
  | 'Basic_Secondary_secondary_500'
  | 'Basic_Secondary_secondary_600'
  | 'Basic_Secondary_secondary_700'
  | 'Basic_Secondary_secondary_800'
  | 'Basic_Secondary_secondary_900'
  | 'Basic_Info_info_50'
  | 'Basic_Info_info_100'
  | 'Basic_Info_info_200'
  | 'Basic_Info_info_300'
  | 'Basic_Info_info_400'
  | 'Basic_Info_info_500'
  | 'Basic_Info_info_600'
  | 'Basic_Info_info_700'
  | 'Basic_Info_info_800'
  | 'Basic_Info_info_900'
  | 'Basic_Danger_danger_50'
  | 'Basic_Danger_danger_100'
  | 'Basic_Danger_danger_200'
  | 'Basic_Danger_danger_300'
  | 'Basic_Danger_danger_400'
  | 'Basic_Danger_danger_500'
  | 'Basic_Danger_danger_600'
  | 'Basic_Danger_danger_700'
  | 'Basic_Danger_danger_800'
  | 'Basic_Danger_danger_900'
  | 'Basic_Warning_warning_50'
  | 'Basic_Warning_warning_100'
  | 'Basic_Warning_warning_200'
  | 'Basic_Warning_warning_300'
  | 'Basic_Warning_warning_400'
  | 'Basic_Warning_warning_500'
  | 'Basic_Warning_warning_600'
  | 'Basic_Warning_warning_700'
  | 'Basic_Warning_warning_800'
  | 'Basic_Warning_warning_900'
  | 'Basic_Success_success_50'
  | 'Basic_Success_success_100'
  | 'Basic_Success_success_200'
  | 'Basic_Success_success_300'
  | 'Basic_Success_success_400'
  | 'Basic_Success_success_500'
  | 'Basic_Success_success_600'
  | 'Basic_Success_success_700'
  | 'Basic_Success_success_800'
  | 'Basic_Success_success_900'
  | 'Basic_Light_light_50'
  | 'Basic_Light_light_100'
  | 'Basic_Light_light_200'
  | 'Basic_Light_light_300'
  | 'Basic_Light_light_400'
  | 'Basic_Light_light_500'
  | 'Basic_Light_light_600'
  | 'Basic_Light_light_700'
  | 'Basic_Light_light_800'
  | 'Basic_Light_light_900';

type ColorKeys =
  | 'Semantic_Button_button_primary_bg'
  | 'Semantic_Button_button_secondary_bg'
  | 'Semantic_Button_button_success_bg'
  | 'Semantic_Button_button_warning_bg'
  | 'Semantic_Button_button_danger_bg'
  | 'Semantic_Button_button_info_bg'
  | 'Semantic_Button_button_primary_hover'
  | 'Semantic_Button_button_secondary_hover'
  | 'Semantic_Button_button_success_hover'
  | 'Semantic_Button_button_warning_hover'
  | 'Semantic_Button_button_danger_hover'
  | 'Semantic_General_general_fill_light'
  | 'Semantic_General_general_fill_light_2'
  | 'Semantic_Button_button_general_text'
  | 'Semantic_Button_button_other_text'
  | 'Semantic_Button_button_disable_text'
  | 'Semantic_Button_button_disable_bg'
  | 'Semantic_General_general_fill_primary_2'
  | 'Semantic_General_general_fill_disable'
  | 'Semantic_General_general_fill_primary_1'
  | 'Semantic_General_general_fill_black_1'
  | 'Semantic_General_general_fill_black_2'
  | 'Semantic_General_general_fill_black_3'
  | 'Semantic_General_general_fill_black_4'
  | 'Semantic_Text_text_primary'
  | 'Semantic_Text_text_secondary'
  | 'Semantic_Text_text_success'
  | 'Semantic_Text_text_warning'
  | 'Semantic_Text_text_danger'
  | 'Semantic_Text_text_info'
  | 'Semantic_Text_text_heading_50'
  | 'Semantic_Text_text_heading_100'
  | 'Semantic_Text_text_heading_900'
  | 'Semantic_Text_text_disable_text'
  | 'Semantic_Text_text_label'
  | 'Semantic_Text_text_placeholder'
  | 'Semantic_Text_text_body_50'
  | 'Semantic_Text_text_body_100'
  | 'Semantic_Text_text_body_200'
  | 'Semantic_Text_text_body_800'
  | 'Semantic_Text_text_body_900'
  | 'Semantic_Border_border_primary'
  | 'Semantic_Border_border_secondary'
  | 'Semantic_Border_border_success'
  | 'Semantic_Border_border_warning'
  | 'Semantic_Border_border_danger'
  | 'Semantic_Border_border_info'
  | 'Semantic_Border_border_disable'
  | 'Semantic_Border_border_standard_100'
  | 'Semantic_Border_border_standard_50'
  | 'Semantic_Border_border_input'
  | 'Semantic_Background_bg_type_1'
  | 'Semantic_Background_bg_type_2'
  | 'Semantic_Background_bg_type_3'
  | 'Semantic_Background_bg_black'
  | 'Semantic_Background_bg_black_2'
  | 'Semantic_Background_bg_black_3'
  | 'Semantic_Background_bg_black_4'
  | 'Semantic_Background_bg_primary'
  | 'Semantic_Background_bg_secondary'
  | 'Semantic_Background_bg_danger'
  | 'Semantic_Background_bg_warning'
  | 'Semantic_Background_bg_success'
  | 'Semantic_Background_bg_info'
  | 'Semantic_Background_bg_success_light'
  | 'Semantic_Background_bg_info_light'
  | 'Semantic_Background_bg_primary_light'
  | 'Semantic_Background_bg_danger_light'
  | 'Semantic_Background_bg_warning_light'
  | 'Semantic_Icon_icon_primary'
  | 'Semantic_Icon_icon_secondary'
  | 'Semantic_Icon_icon_attribute'
  | 'Semantic_Icon_icon_black'
  | 'Semantic_Icon_icon_white'
  | 'Semantic_Other_checkbox_normal_border'
  | 'Semantic_Other_checkbox_disable_border'
  | 'Semantic_Other_checkbox_disable_fill'
  | 'Semantic_Other_checkbox_disable_checked_fill'
  | 'Semantic_Other_checkbox_disable_checked_check'
  | 'Semantic_Other_checkbox_checked_fill'
  | 'Semantic_Other_checkbox_checked_check'
  | 'Semantic_Other_radio_normal_border'
  | 'Semantic_Other_radio_disable_border'
  | 'Semantic_Other_radio_disable_fill'
  | 'Semantic_Other_radio_checked_fill'
  | 'Semantic_Other_radio_checked_border'
  | 'Semantic_Other_switch_disable_fill'
  | 'Semantic_Other_switch_checked_fill';

const ThemeBaseColors: ThemeBaseColors = {
  General: {
    Basic_Primary_primary_50: '#EEF2FF',
    Basic_Primary_primary_100: '#E0E7FF',
    Basic_Primary_primary_200: '#C7D2FE',
    Basic_Primary_primary_300: '#A5B4FC',
    Basic_Primary_primary_400: '#818CF8',
    Basic_Primary_primary_500: '#6366F1',
    Basic_Primary_primary_600: '#4F46E5',
    Basic_Primary_primary_700: '#4338CA',
    Basic_Primary_primary_800: '#3730A3',
    Basic_Primary_primary_900: '#312E81',
    Basic_Dark_dark_50: '#E7E7EB',
    Basic_Dark_dark_100: '#B6B5C1',
    Basic_Dark_dark_200: '#9292A3',
    Basic_Dark_dark_300: '#60607A',
    Basic_Dark_dark_400: '#414160',
    Basic_Dark_dark_500: '#121138',
    Basic_Dark_dark_600: '#100F33',
    Basic_Dark_dark_700: '#0D0C28',
    Basic_Dark_dark_800: '#0A091F',
    Basic_Dark_dark_900: '#080718',
    Basic_Secondary_secondary_50: '#FFF1F2',
    Basic_Secondary_secondary_100: '#FFE4E6',
    Basic_Secondary_secondary_200: '#FECDD3',
    Basic_Secondary_secondary_300: '#FDA4AF',
    Basic_Secondary_secondary_400: '#FB7185',
    Basic_Secondary_secondary_500: '#F43F5E',
    Basic_Secondary_secondary_600: '#E11D48',
    Basic_Secondary_secondary_700: '#BE123C',
    Basic_Secondary_secondary_800: '#9F1239',
    Basic_Secondary_secondary_900: '#881337',
    Basic_Info_info_50: '#E9F6FE',
    Basic_Info_info_100: '#E2F3FE',
    Basic_Info_info_200: '#C5E5FE',
    Basic_Info_info_300: '#A8D5FE',
    Basic_Info_info_400: '#92C5FD',
    Basic_Info_info_500: '#6FACFC',
    Basic_Info_info_600: '#5185D8',
    Basic_Info_info_700: '#3763B5',
    Basic_Info_info_800: '#234492',
    Basic_Info_info_900: '#152E78',
    Basic_Danger_danger_50: '#FFE6EF',
    Basic_Danger_danger_100: '#FFC3C8',
    Basic_Danger_danger_200: '#FFA7AE',
    Basic_Danger_danger_300: '#FF7E89',
    Basic_Danger_danger_400: '#FF6572',
    Basic_Danger_danger_500: '#FF3F4F',
    Basic_Danger_danger_600: '#E83948',
    Basic_Danger_danger_700: '#B52D38',
    Basic_Danger_danger_800: '#8C232B',
    Basic_Danger_danger_900: '#6B1A21',
    Basic_Warning_warning_50: '#FFFBE6',
    Basic_Warning_warning_100: '#FFF3B1',
    Basic_Warning_warning_200: '#FFEE8B',
    Basic_Warning_warning_300: '#FFE655',
    Basic_Warning_warning_400: '#FFE135',
    Basic_Warning_warning_500: '#FFD902',
    Basic_Warning_warning_600: '#E8C502',
    Basic_Warning_warning_700: '#B59A01',
    Basic_Warning_warning_800: '#8C7701',
    Basic_Warning_warning_900: '#6B5B01',
    Basic_Success_success_50: '#ECF9EC',
    Basic_Success_success_100: '#C3ECC3',
    Basic_Success_success_200: '#A5E2A6',
    Basic_Success_success_300: '#7CD57E',
    Basic_Success_success_400: '#63CD65',
    Basic_Success_success_500: '#3CC13E',
    Basic_Success_success_600: '#37B038',
    Basic_Success_success_700: '#2B892C',
    Basic_Success_success_800: '#216A22',
    Basic_Success_success_900: '#234E07',
    Basic_Light_light_50: '#FCFCFD',
    Basic_Light_light_100: '#F6F6F6',
    Basic_Light_light_200: '#F3F3F4',
    Basic_Light_light_300: '#EEEEEE',
    Basic_Light_light_400: '#EAEAEB',
    Basic_Light_light_500: '#E5E5E6',
    Basic_Light_light_600: '#D0D0D1',
    Basic_Light_light_700: '#A3A3A3',
    Basic_Light_light_800: '#7E7E7F',
    Basic_Light_light_900: '#606061',
  },
  Neon_Style: {
    Basic_Primary_primary_50: '#F7EFFF',
    Basic_Primary_primary_100: '#E5CCFD',
    Basic_Primary_primary_200: '#D8B4FD',
    Basic_Primary_primary_300: '#C792FC',
    Basic_Primary_primary_400: '#BC7DFB',
    Basic_Primary_primary_500: '#AB5CFA',
    Basic_Primary_primary_600: '#9C54E4',
    Basic_Primary_primary_700: '#7941B2',
    Basic_Primary_primary_800: '#5E338A',
    Basic_Primary_primary_900: '#482769',
    Basic_Dark_dark_50: '#EBEBEB',
    Basic_Dark_dark_100: '#BFBEC0',
    Basic_Dark_dark_200: '#A09EA2',
    Basic_Dark_dark_300: '#747278',
    Basic_Dark_dark_400: '#59565D',
    Basic_Dark_dark_500: '#302C35',
    Basic_Dark_dark_600: '#2C2830',
    Basic_Dark_dark_700: '#221F26',
    Basic_Dark_dark_800: '#1A181D',
    Basic_Dark_dark_900: '#141216',
    Basic_Secondary_secondary_50: '#FDF1E7',
    Basic_Secondary_secondary_100: '#F9D4B5',
    Basic_Secondary_secondary_200: '#F6BF91',
    Basic_Secondary_secondary_300: '#F2A25F',
    Basic_Secondary_secondary_400: '#F09040',
    Basic_Secondary_secondary_500: '#EC8710',
    Basic_Secondary_secondary_600: '#D76A0F',
    Basic_Secondary_secondary_700: '#A8520B',
    Basic_Secondary_secondary_800: '#824009',
    Basic_Secondary_secondary_900: '#633107',
    Basic_Info_info_50: '#FFEFEF',
    Basic_Info_info_100: '#FFCECF',
    Basic_Info_info_200: '#FFB7B7',
    Basic_Info_info_300: '#FE9696',
    Basic_Info_info_400: '#FE8182',
    Basic_Info_info_500: '#FE6263',
    Basic_Info_info_600: '#E7595A',
    Basic_Info_info_700: '#B44646',
    Basic_Info_info_800: '#8C3636',
    Basic_Info_info_900: '#6B292A',
    Basic_Danger_danger_50: '#FFE6EF',
    Basic_Danger_danger_100: '#FFC3C8',
    Basic_Danger_danger_200: '#FFA7AE',
    Basic_Danger_danger_300: '#FF7E89',
    Basic_Danger_danger_400: '#FF6572',
    Basic_Danger_danger_500: '#FF3F4F',
    Basic_Danger_danger_600: '#E83948',
    Basic_Danger_danger_700: '#B52D38',
    Basic_Danger_danger_800: '#8C232B',
    Basic_Danger_danger_900: '#6B1A21',
    Basic_Warning_warning_50: '#FFFDE7',
    Basic_Warning_warning_100: '#FFF9B5',
    Basic_Warning_warning_200: '#FFF692',
    Basic_Warning_warning_300: '#FFF260',
    Basic_Warning_warning_400: '#FFEF41',
    Basic_Warning_warning_500: '#FFEB11',
    Basic_Warning_warning_600: '#E8D60F',
    Basic_Warning_warning_700: '#B5A70C',
    Basic_Warning_warning_800: '#8C8109',
    Basic_Warning_warning_900: '#6B6307',
    Basic_Success_success_50: '#E6F8F1',
    Basic_Success_success_100: '#B2E9D3',
    Basic_Success_success_200: '#8CDFBE',
    Basic_Success_success_300: '#58D0A0',
    Basic_Success_success_400: '#38C78D',
    Basic_Success_success_500: '#06B971',
    Basic_Success_success_600: '#05A867',
    Basic_Success_success_700: '#048350',
    Basic_Success_success_800: '#03663E',
    Basic_Success_success_900: '#034E2F',
    Basic_Light_light_50: '#FDFDFD',
    Basic_Light_light_100: '#F6F6F6',
    Basic_Light_light_200: '#F4F4F4',
    Basic_Light_light_300: '#EEEEEE',
    Basic_Light_light_400: '#EBEBEB',
    Basic_Light_light_500: '#E6E6E6',
    Basic_Light_light_600: '#D0D0D1',
    Basic_Light_light_700: '#A3A3A3',
    Basic_Light_light_800: '#7E7E7F',
    Basic_Light_light_900: '#606061',
  },
};

const Colors: ThemeColors = {
  General: {
    Semantic_Button_button_primary_bg:
      ThemeBaseColors.General.Basic_Primary_primary_500,
    Semantic_Button_button_secondary_bg:
      ThemeBaseColors.General.Basic_Secondary_secondary_500,
    Semantic_Button_button_success_bg:
      ThemeBaseColors.General.Basic_Success_success_500,
    Semantic_Button_button_warning_bg:
      ThemeBaseColors.General.Basic_Warning_warning_500,
    Semantic_Button_button_danger_bg:
      ThemeBaseColors.General.Basic_Danger_danger_500,
    Semantic_Button_button_info_bg: ThemeBaseColors.General.Basic_Info_info_500,
    Semantic_Button_button_primary_hover:
      ThemeBaseColors.General.Basic_Primary_primary_600,
    Semantic_Button_button_secondary_hover:
      ThemeBaseColors.General.Basic_Secondary_secondary_600,
    Semantic_Button_button_success_hover:
      ThemeBaseColors.General.Basic_Success_success_600,
    Semantic_Button_button_warning_hover:
      ThemeBaseColors.General.Basic_Warning_warning_600,
    Semantic_Button_button_danger_hover:
      ThemeBaseColors.General.Basic_Danger_danger_600,
    Semantic_General_general_fill_light:
      ThemeBaseColors.General.Basic_Light_light_50,
    Semantic_General_general_fill_light_2:
      ThemeBaseColors.General.Basic_Light_light_100,
    Semantic_Button_button_general_text:
      ThemeBaseColors.General.Basic_Light_light_50,
    Semantic_Button_button_other_text:
      ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_Button_button_disable_text:
      ThemeBaseColors.General.Basic_Light_light_600,
    Semantic_Button_button_disable_bg:
      ThemeBaseColors.General.Basic_Light_light_400,
    Semantic_General_general_fill_primary_2:
      ThemeBaseColors.General.Basic_Primary_primary_500,
    Semantic_General_general_fill_disable:
      ThemeBaseColors.General.Basic_Dark_dark_100,
    Semantic_General_general_fill_primary_1:
      ThemeBaseColors.General.Basic_Primary_primary_50,
    Semantic_General_general_fill_black_1:
      ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_General_general_fill_black_2:
      ThemeBaseColors.General.Basic_Dark_dark_800,
    Semantic_General_general_fill_black_3:
      ThemeBaseColors.General.Basic_Dark_dark_700,
    Semantic_General_general_fill_black_4:
      ThemeBaseColors.General.Basic_Dark_dark_600,
    Semantic_Text_text_primary:
      ThemeBaseColors.General.Basic_Primary_primary_500,
    Semantic_Text_text_secondary:
      ThemeBaseColors.General.Basic_Secondary_secondary_500,
    Semantic_Text_text_success:
      ThemeBaseColors.General.Basic_Success_success_500,
    Semantic_Text_text_warning:
      ThemeBaseColors.General.Basic_Warning_warning_500,
    Semantic_Text_text_danger: ThemeBaseColors.General.Basic_Danger_danger_500,
    Semantic_Text_text_info: ThemeBaseColors.General.Basic_Info_info_500,
    Semantic_Text_text_heading_50: ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_Text_text_heading_100: ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_Text_text_heading_900: ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_Text_text_disable_text:
      ThemeBaseColors.General.Basic_Light_light_600,
    Semantic_Text_text_label: ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_Text_text_placeholder: ThemeBaseColors.General.Basic_Dark_dark_100,
    Semantic_Text_text_body_50: ThemeBaseColors.General.Basic_Dark_dark_500,
    Semantic_Text_text_body_100: ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_Text_text_body_200: ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_Text_text_body_800: ThemeBaseColors.General.Basic_Dark_dark_500,
    Semantic_Text_text_body_900: ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_Border_border_primary:
      ThemeBaseColors.General.Basic_Primary_primary_600,
    Semantic_Border_border_secondary:
      ThemeBaseColors.General.Basic_Secondary_secondary_600,
    Semantic_Border_border_success:
      ThemeBaseColors.General.Basic_Success_success_600,
    Semantic_Border_border_warning:
      ThemeBaseColors.General.Basic_Warning_warning_600,
    Semantic_Border_border_danger:
      ThemeBaseColors.General.Basic_Danger_danger_600,
    Semantic_Border_border_info: ThemeBaseColors.General.Basic_Info_info_600,
    Semantic_Border_border_disable:
      ThemeBaseColors.General.Basic_Light_light_700,
    Semantic_Border_border_standard_100:
      ThemeBaseColors.General.Basic_Light_light_600,
    Semantic_Border_border_standard_50:
      ThemeBaseColors.General.Basic_Light_light_300,
    Semantic_Border_border_input: ThemeBaseColors.General.Basic_Light_light_300,
    Semantic_Background_bg_type_1: ThemeBaseColors.General.Basic_Light_light_50,
    Semantic_Background_bg_type_2:
      ThemeBaseColors.General.Basic_Light_light_300,
    Semantic_Background_bg_type_3:
      ThemeBaseColors.General.Basic_Primary_primary_50,
    Semantic_Background_bg_black: ThemeBaseColors.General.Basic_Dark_dark_800,
    Semantic_Background_bg_black_2: ThemeBaseColors.General.Basic_Dark_dark_800,
    Semantic_Background_bg_black_3: ThemeBaseColors.General.Basic_Dark_dark_700,
    Semantic_Background_bg_black_4: ThemeBaseColors.General.Basic_Dark_dark_600,
    Semantic_Background_bg_primary:
      ThemeBaseColors.General.Basic_Primary_primary_600,
    Semantic_Background_bg_secondary:
      ThemeBaseColors.General.Basic_Secondary_secondary_500,
    Semantic_Background_bg_danger:
      ThemeBaseColors.General.Basic_Danger_danger_600,
    Semantic_Background_bg_warning:
      ThemeBaseColors.General.Basic_Warning_warning_600,
    Semantic_Background_bg_success:
      ThemeBaseColors.General.Basic_Success_success_600,
    Semantic_Background_bg_info: ThemeBaseColors.General.Basic_Info_info_600,
    Semantic_Background_bg_success_light:
      ThemeBaseColors.General.Basic_Success_success_50,
    Semantic_Background_bg_info_light:
      ThemeBaseColors.General.Basic_Info_info_50,
    Semantic_Background_bg_primary_light:
      ThemeBaseColors.General.Basic_Primary_primary_50,
    Semantic_Background_bg_danger_light:
      ThemeBaseColors.General.Basic_Danger_danger_50,
    Semantic_Background_bg_warning_light:
      ThemeBaseColors.General.Basic_Warning_warning_50,
    Semantic_Icon_icon_primary:
      ThemeBaseColors.General.Basic_Primary_primary_500,
    Semantic_Icon_icon_secondary:
      ThemeBaseColors.General.Basic_Secondary_secondary_500,
    Semantic_Icon_icon_attribute: ThemeBaseColors.General.Basic_Dark_dark_300,
    Semantic_Icon_icon_black: ThemeBaseColors.General.Basic_Dark_dark_900,
    Semantic_Icon_icon_white: ThemeBaseColors.General.Basic_Light_light_50,
    Semantic_Other_checkbox_normal_border:
      ThemeBaseColors.General.Basic_Dark_dark_100,
    Semantic_Other_checkbox_disable_border:
      ThemeBaseColors.General.Basic_Dark_dark_100,
    Semantic_Other_checkbox_disable_fill:
      ThemeBaseColors.General.Basic_Light_light_400,
    Semantic_Other_checkbox_disable_checked_fill:
      ThemeBaseColors.General.Basic_Light_light_400,
    Semantic_Other_checkbox_disable_checked_check:
      ThemeBaseColors.General.Basic_Dark_dark_100,
    Semantic_Other_checkbox_checked_fill:
      ThemeBaseColors.General.Basic_Primary_primary_500,
    Semantic_Other_checkbox_checked_check:
      ThemeBaseColors.General.Basic_Light_light_50,
    Semantic_Other_radio_normal_border:
      ThemeBaseColors.General.Basic_Dark_dark_100,
    Semantic_Other_radio_disable_border:
      ThemeBaseColors.General.Basic_Dark_dark_100,
    Semantic_Other_radio_disable_fill:
      ThemeBaseColors.General.Basic_Dark_dark_100,
    Semantic_Other_radio_checked_fill:
      ThemeBaseColors.General.Basic_Primary_primary_500,
    Semantic_Other_radio_checked_border:
      ThemeBaseColors.General.Basic_Primary_primary_500,
    Semantic_Other_switch_disable_fill:
      ThemeBaseColors.General.Basic_Dark_dark_100,
    Semantic_Other_switch_checked_fill:
      ThemeBaseColors.General.Basic_Primary_primary_500,
  },
  Neon_Style: {
    Semantic_Button_button_primary_bg:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_500,
    Semantic_Button_button_secondary_bg:
      ThemeBaseColors.Neon_Style.Basic_Secondary_secondary_500,
    Semantic_Button_button_success_bg:
      ThemeBaseColors.Neon_Style.Basic_Success_success_500,
    Semantic_Button_button_warning_bg:
      ThemeBaseColors.Neon_Style.Basic_Warning_warning_500,
    Semantic_Button_button_danger_bg:
      ThemeBaseColors.Neon_Style.Basic_Danger_danger_500,
    Semantic_Button_button_info_bg:
      ThemeBaseColors.Neon_Style.Basic_Info_info_500,
    Semantic_Button_button_primary_hover:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_600,
    Semantic_Button_button_secondary_hover:
      ThemeBaseColors.Neon_Style.Basic_Secondary_secondary_600,
    Semantic_Button_button_success_hover:
      ThemeBaseColors.Neon_Style.Basic_Success_success_600,
    Semantic_Button_button_warning_hover:
      ThemeBaseColors.Neon_Style.Basic_Warning_warning_600,
    Semantic_Button_button_danger_hover:
      ThemeBaseColors.Neon_Style.Basic_Danger_danger_600,
    Semantic_General_general_fill_light:
      ThemeBaseColors.Neon_Style.Basic_Light_light_50,
    Semantic_General_general_fill_light_2:
      ThemeBaseColors.Neon_Style.Basic_Light_light_100,
    Semantic_Button_button_general_text:
      ThemeBaseColors.Neon_Style.Basic_Light_light_50,
    Semantic_Button_button_other_text:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_900,
    Semantic_Button_button_disable_text:
      ThemeBaseColors.Neon_Style.Basic_Light_light_600,
    Semantic_Button_button_disable_bg:
      ThemeBaseColors.Neon_Style.Basic_Light_light_400,
    Semantic_General_general_fill_primary_2:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_500,
    Semantic_General_general_fill_disable:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_100,
    Semantic_General_general_fill_primary_1:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_50,
    Semantic_General_general_fill_black_1:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_900,
    Semantic_General_general_fill_black_2:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_800,
    Semantic_General_general_fill_black_3:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_700,
    Semantic_General_general_fill_black_4:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_600,
    Semantic_Text_text_primary:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_500,
    Semantic_Text_text_secondary:
      ThemeBaseColors.Neon_Style.Basic_Secondary_secondary_500,
    Semantic_Text_text_success:
      ThemeBaseColors.Neon_Style.Basic_Success_success_500,
    Semantic_Text_text_warning:
      ThemeBaseColors.Neon_Style.Basic_Warning_warning_500,
    Semantic_Text_text_danger:
      ThemeBaseColors.Neon_Style.Basic_Danger_danger_500,
    Semantic_Text_text_info: ThemeBaseColors.Neon_Style.Basic_Info_info_500,
    Semantic_Text_text_heading_50:
      ThemeBaseColors.Neon_Style.Basic_Light_light_50,
    Semantic_Text_text_heading_100:
      ThemeBaseColors.Neon_Style.Basic_Light_light_600,
    Semantic_Text_text_heading_900:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_800,
    Semantic_Text_text_disable_text:
      ThemeBaseColors.Neon_Style.Basic_Light_light_600,
    Semantic_Text_text_label: ThemeBaseColors.Neon_Style.Basic_Light_light_50,
    Semantic_Text_text_placeholder:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_400,
    Semantic_Text_text_body_50:
      ThemeBaseColors.Neon_Style.Basic_Light_light_100,
    Semantic_Text_text_body_100:
      ThemeBaseColors.Neon_Style.Basic_Light_light_400,
    Semantic_Text_text_body_200:
      ThemeBaseColors.Neon_Style.Basic_Light_light_600,
    Semantic_Text_text_body_800: ThemeBaseColors.Neon_Style.Basic_Dark_dark_500,
    Semantic_Text_text_body_900: ThemeBaseColors.Neon_Style.Basic_Dark_dark_800,
    Semantic_Border_border_primary:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_600,
    Semantic_Border_border_secondary:
      ThemeBaseColors.Neon_Style.Basic_Secondary_secondary_600,
    Semantic_Border_border_success:
      ThemeBaseColors.Neon_Style.Basic_Success_success_600,
    Semantic_Border_border_warning:
      ThemeBaseColors.Neon_Style.Basic_Warning_warning_600,
    Semantic_Border_border_danger:
      ThemeBaseColors.Neon_Style.Basic_Danger_danger_600,
    Semantic_Border_border_info: ThemeBaseColors.Neon_Style.Basic_Info_info_600,
    Semantic_Border_border_disable:
      ThemeBaseColors.Neon_Style.Basic_Light_light_700,
    Semantic_Border_border_standard_100:
      ThemeBaseColors.Neon_Style.Basic_Light_light_600,
    Semantic_Border_border_standard_50:
      ThemeBaseColors.Neon_Style.Basic_Light_light_300,
    Semantic_Border_border_input:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_700,
    Semantic_Background_bg_type_1:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_800,
    Semantic_Background_bg_type_2:
      ThemeBaseColors.Neon_Style.Basic_Light_light_300,
    Semantic_Background_bg_type_3:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_50,
    Semantic_Background_bg_black:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_900,
    Semantic_Background_bg_black_2:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_800,
    Semantic_Background_bg_black_3:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_700,
    Semantic_Background_bg_black_4:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_600,
    Semantic_Background_bg_primary:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_600,
    Semantic_Background_bg_secondary:
      ThemeBaseColors.Neon_Style.Basic_Secondary_secondary_600,
    Semantic_Background_bg_danger:
      ThemeBaseColors.Neon_Style.Basic_Danger_danger_600,
    Semantic_Background_bg_warning:
      ThemeBaseColors.Neon_Style.Basic_Warning_warning_600,
    Semantic_Background_bg_success:
      ThemeBaseColors.Neon_Style.Basic_Success_success_600,
    Semantic_Background_bg_info: ThemeBaseColors.Neon_Style.Basic_Info_info_600,
    Semantic_Background_bg_success_light:
      ThemeBaseColors.Neon_Style.Basic_Success_success_50,
    Semantic_Background_bg_info_light:
      ThemeBaseColors.Neon_Style.Basic_Info_info_50,
    Semantic_Background_bg_primary_light:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_50,
    Semantic_Background_bg_danger_light:
      ThemeBaseColors.Neon_Style.Basic_Danger_danger_50,
    Semantic_Background_bg_warning_light:
      ThemeBaseColors.Neon_Style.Basic_Warning_warning_50,
    Semantic_Icon_icon_primary:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_500,
    Semantic_Icon_icon_secondary:
      ThemeBaseColors.Neon_Style.Basic_Secondary_secondary_500,
    Semantic_Icon_icon_attribute:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_300,
    Semantic_Icon_icon_black: ThemeBaseColors.Neon_Style.Basic_Dark_dark_900,
    Semantic_Icon_icon_white: ThemeBaseColors.Neon_Style.Basic_Light_light_50,
    Semantic_Other_checkbox_normal_border:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_100,
    Semantic_Other_checkbox_disable_border:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_100,
    Semantic_Other_checkbox_disable_fill:
      ThemeBaseColors.Neon_Style.Basic_Light_light_400,
    Semantic_Other_checkbox_disable_checked_fill:
      ThemeBaseColors.Neon_Style.Basic_Light_light_400,
    Semantic_Other_checkbox_disable_checked_check:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_100,
    Semantic_Other_checkbox_checked_fill:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_500,
    Semantic_Other_checkbox_checked_check:
      ThemeBaseColors.Neon_Style.Basic_Light_light_50,
    Semantic_Other_radio_normal_border:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_100,
    Semantic_Other_radio_disable_border:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_100,
    Semantic_Other_radio_disable_fill:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_100,
    Semantic_Other_radio_checked_fill:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_500,
    Semantic_Other_radio_checked_border:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_500,
    Semantic_Other_switch_disable_fill:
      ThemeBaseColors.Neon_Style.Basic_Dark_dark_100,
    Semantic_Other_switch_checked_fill:
      ThemeBaseColors.Neon_Style.Basic_Primary_primary_500,
  },
};

export default Colors;

export type ColorsType = {
  [key in ColorKeys]: string;
};
