<?php
/** @var yii\web\View $this */
/** @var array $pets */

use yii\helpers\Html;

$this->title = 'About';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-about">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>This is the About page. Data from MySQL (table <code>pets</code>):</p>

    <?php if (!empty($pets)): ?>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Species</th>
                    <th>Created at</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($pets as $p): ?>
                    <tr>
                        <td><?= Html::encode($p['id']) ?></td>
                        <td><?= Html::encode($p['name']) ?></td>
                        <td><?= Html::encode($p['species']) ?></td>
                        <td><?= Html::encode($p['created_at']) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php else: ?>
        <p>No data yet.</p>
    <?php endif; ?>
</div>
