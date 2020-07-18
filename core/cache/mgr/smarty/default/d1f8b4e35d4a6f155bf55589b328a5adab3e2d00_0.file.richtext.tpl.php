<?php
/* Smarty version 3.1.33, created on 2020-07-16 18:46:12
  from '/home/e/e5ash/stanisla.e5ash.com/public_html/manager/templates/default/element/tv/renders/input/richtext.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.33',
  'unifunc' => 'content_5f107644a8c365_48607519',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd1f8b4e35d4a6f155bf55589b328a5adab3e2d00' => 
    array (
      0 => '/home/e/e5ash/stanisla.e5ash.com/public_html/manager/templates/default/element/tv/renders/input/richtext.tpl',
      1 => 1594911836,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5f107644a8c365_48607519 (Smarty_Internal_Template $_smarty_tpl) {
?><textarea id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" class="modx-richtext" onchange="MODx.fireResourceFormChange();"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['tv']->value->get('value'), ENT_QUOTES, 'UTF-8', true);?>
</textarea>

<?php echo '<script'; ?>
 type="text/javascript">

Ext.onReady(function() {
    
    MODx.makeDroppable(Ext.get('tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'));
    
});
<?php echo '</script'; ?>
><?php }
}
