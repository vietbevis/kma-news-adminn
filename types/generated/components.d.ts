import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCommonBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_common_blocks';
  info: {
    displayName: 'Common Block';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    isBackgroundHighlight: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    isLinkFullWidth: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'elements.link', false>;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variants: Schema.Attribute.Enumeration<
      ['news', 'events', 'trainning', 'cooperation', 'alumni', 'slider']
    > &
      Schema.Attribute.Required;
  };
}

export interface BlocksSemester extends Struct.ComponentSchema {
  collectionName: 'components_blocks_semesters';
  info: {
    displayName: 'Semester';
  };
  attributes: {
    semester: Schema.Attribute.Integer & Schema.Attribute.Required;
    subjects: Schema.Attribute.Relation<'oneToMany', 'api::subject.subject'>;
  };
}

export interface BlocksSemesterBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_semester_blocks';
  info: {
    displayName: 'Semester Block';
  };
  attributes: {
    semesters: Schema.Attribute.Component<'blocks.semester', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsBlockDescription extends Struct.ComponentSchema {
  collectionName: 'components_elements_block_descriptions';
  info: {
    displayName: 'blockDescription';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsContact extends Struct.ComponentSchema {
  collectionName: 'components_elements_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    email: Schema.Attribute.Email;
    googleMap: Schema.Attribute.Text;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    phoneNumber: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'elements.social-links', true>;
  };
}

export interface ElementsCopyRight extends Struct.ComponentSchema {
  collectionName: 'components_elements_copy_rights';
  info: {
    displayName: 'Copy Right';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_quick_links';
  info: {
    displayName: 'Quick Links';
  };
  attributes: {
    navigations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navigation.navigation'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSinglePage extends Struct.ComponentSchema {
  collectionName: 'components_elements_single_pages';
  info: {
    displayName: 'single page';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ElementsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social links';
  };
  attributes: {
    link: Schema.Attribute.Component<'elements.link', false> &
      Schema.Attribute.Required;
    platform: Schema.Attribute.Enumeration<
      ['Twitter', 'Facebook', 'LinkedIn', 'Instagram', 'Github', 'Youtube']
    > &
      Schema.Attribute.Required;
  };
}

export interface LayoutsFooter extends Struct.ComponentSchema {
  collectionName: 'components_layouts_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contact: Schema.Attribute.Component<'elements.contact', false>;
    copyRight: Schema.Attribute.Component<'elements.copy-right', false>;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    quickLinks: Schema.Attribute.Relation<
      'oneToMany',
      'api::navigation.navigation'
    >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutsHeader extends Struct.ComponentSchema {
  collectionName: 'components_layouts_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    facultyWork: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false> &
      Schema.Attribute.Required;
    navigations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navigation.navigation'
    >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.common-block': BlocksCommonBlock;
      'blocks.semester': BlocksSemester;
      'blocks.semester-block': BlocksSemesterBlock;
      'elements.block-description': ElementsBlockDescription;
      'elements.contact': ElementsContact;
      'elements.copy-right': ElementsCopyRight;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.quick-links': ElementsQuickLinks;
      'elements.single-page': ElementsSinglePage;
      'elements.social-links': ElementsSocialLinks;
      'layouts.footer': LayoutsFooter;
      'layouts.header': LayoutsHeader;
    }
  }
}
